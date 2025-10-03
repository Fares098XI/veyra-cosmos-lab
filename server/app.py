# server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os, requests, logging
from dotenv import load_dotenv

load_dotenv()  # loads server/.env during local dev

CHATBASE_URL = "https://www.chatbase.co/api/v1/chat"
CHATBASE_TOKEN = os.environ.get("CHATBASE_TOKEN")

if not CHATBASE_TOKEN:
    raise RuntimeError("CHATBASE_TOKEN not set in environment (server/.env)")

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # tighten origin in production
logging.basicConfig(level=logging.INFO)


@app.route("/api/chat", methods=["POST"])
def chat():
    payload = request.get_json(force=True, silent=True) or {}
    messages = payload.get("messages")
    conv_id = payload.get("conversation_id")

    if not messages or not isinstance(messages, list):
        return jsonify({"error": "missing 'messages' array"}), 400

    body = {"messages": messages}
    if conv_id:
        body["conversation_id"] = conv_id

    headers = {
        "Authorization": f"Bearer {CHATBASE_TOKEN}",
        "Content-Type": "application/json",
    }
    try:
        r = requests.post(CHATBASE_URL, json=body, headers=headers, timeout=20)
        # attempt to parse response text (for debugging)
        text = r.text
        # raise_for_status will raise on 4xx/5xx
        r.raise_for_status()
    except requests.exceptions.HTTPError as http_err:
        # include upstream status and body so we can debug
        app.logger.error("Chatbase HTTP error: %s ; resp status=%s body=%s", http_err, getattr(r, "status_code", None), getattr(r, "text", None))
        return jsonify({
            "error": "upstream_http_error",
            "status": getattr(r, "status_code", None),
            "body": getattr(r, "text", None)
        }), 502
    except Exception as e:
        app.logger.error("Chatbase proxy error: %s", e, exc_info=True)
        return jsonify({"error": "upstream_error", "detail": str(e)}), 502

    
    try:
        r = requests.post(CHATBASE_URL, json=body, headers=headers, timeout=20)
        r.raise_for_status()
    except Exception as e:
        app.logger.error("Chatbase proxy error: %s", e, exc_info=True)
        return jsonify({
            "error": "upstream error",
            "detail": str(e),
            "status_code": getattr(r, "status_code", None)
        }), 502

    return jsonify(r.json()), r.status_code


# ✅ This was missing
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
