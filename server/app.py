# server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os, requests, logging
from dotenv import load_dotenv

# Load server/.env in development
load_dotenv()

CHATBASE_URL = "https://www.chatbase.co/api/v1/chat"
CHATBASE_TOKEN = os.environ.get("CHATBASE_TOKEN")
CHATBOT_ID = os.environ.get("CHATBOT_ID")  # <-- required by Chatbase API

if not CHATBASE_TOKEN:
    raise RuntimeError("CHATBASE_TOKEN not set in environment (server/.env)")

if not CHATBOT_ID:
    raise RuntimeError("CHATBOT_ID not set in environment (server/.env)")

app = Flask(__name__)
# tighten CORS in production; wildcard ok for dev
CORS(app, resources={r"/api/*": {"origins": "*"}})
logging.basicConfig(level=logging.INFO)


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"ok": True, "chatbase_token_present": bool(CHATBASE_TOKEN), "chatbot_id_present": bool(CHATBOT_ID)}), 200


@app.route("/api/chat", methods=["POST"])
def chat():
    """
    Expects body: { messages: [{role: "user"|"assistant", content: "..."}, ...], optional conversation_id or conversationId }
    Adds chatbotId from server env and forwards to Chatbase.
    """
    payload = request.get_json(force=True, silent=True) or {}
    messages = payload.get("messages")
    # Accept either snake_case or camelCase from client; normalize to Chatbase's camelCase names
    conv_id = payload.get("conversationId") or payload.get("conversation_id") or payload.get("conversation_id".lower())

    if not messages or not isinstance(messages, list):
        return jsonify({"error": "missing 'messages' array"}), 400

    # Build outgoing Chatbase body
    body = {
        "messages": messages,
        "chatbotId": CHATBOT_ID,   # required by Chatbase API docs
        # don't default to streaming here; allow client to override by sending stream: true
    }
    if conv_id:
        body["conversationId"] = conv_id

    # allow client to override model/temperature/stream if present (pass-through)
    for key in ("stream", "temperature", "model"):
        if key in payload:
            body[key] = payload[key]

    headers = {
        "Authorization": f"Bearer {CHATBASE_TOKEN}",
        "Content-Type": "application/json",
    }

    try:
        r = requests.post(CHATBASE_URL, json=body, headers=headers, timeout=30)
        r.raise_for_status()
    except requests.exceptions.RequestException as e:
        # Attempt to include upstream response body if present
        upstream_status = getattr(e.response, "status_code", None)
        upstream_body = None
        try:
            if e.response is not None:
                upstream_body = e.response.json()
        except Exception:
            upstream_body = e.response.text if e.response is not None else None

        app.logger.error("Chatbase proxy error: %s; upstream_status=%s upstream_body=%s", e, upstream_status, upstream_body, exc_info=False)
        return jsonify({
            "error": "upstream_http_error",
            "outgoing_body_sent": body,
            "status_code": upstream_status,
            "upstream_body": upstream_body
        }), 502

    # forward whatever Chatbase returns
    try:
        return jsonify(r.json()), r.status_code
    except Exception:
        # fallback if upstream didn't return JSON
        return (r.text, r.status_code, {"Content-Type": "text/plain"})


if __name__ == "__main__":
    # Run Flask development server
    app.run(host="0.0.0.0", port=5000, debug=True)
