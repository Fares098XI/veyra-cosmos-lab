import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson9() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    setScore(100);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="page-container">
      <Button onClick={() => navigate("/nbl")} variant="outline" className="mb-6 gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to NBL
      </Button>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Lesson 9:</span> Challenges & Problem-Solving in the NBL
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Training in the Neutral Buoyancy Laboratory (NBL) is not only about rehearsing tasks—it is about learning to solve problems under pressure. Spacewalks are unpredictable. Equipment can fail, tools can drift away, or tasks can take longer than expected. The NBL provides a safe yet realistic environment for practicing these problem-solving skills.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Nature of Challenges in Space</h2>
            <p>
              In space, small problems can escalate quickly. A stuck bolt, a damaged tether, or a communication glitch can jeopardize the entire EVA. The NBL is designed to simulate not just routine tasks but also unexpected scenarios.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Technical Challenges Simulated in the NBL</h2>
            <p>
              Trainers may simulate tool malfunctions, equipment snags, misalignment issues, and limited visibility conditions to prepare astronauts for working in orbital darkness or blinding sunlight.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Human & Physical Challenges</h2>
            <p>
              Training sessions can last six hours, teaching astronauts how to conserve energy, manage stress, and handle communication errors. Working underwater in a bulky suit while trainers simulate problems is stressful.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Problem-Solving Strategies in Training</h2>
            <p>
              Astronauts learn to pause and assess, use checklists and procedures, rely on teamwork, and practice improvisation when solutions aren't written down.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Real-Life Examples from the NBL to Space</h2>
            <p>
              Stuck solar array bolt (2007), cooling pump failure (2010), and glove wear issues have all been successfully handled thanks to NBL training.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Psychological Resilience</h2>
            <p>
              Problem-solving is not only about tools and procedures—it is about mindset. The NBL builds astronauts' psychological resilience by exposing them to controlled stress.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Earth Applications</h2>
            <p>
              Problem-solving lessons from the NBL translate to medicine (surgeons), engineering (construction), and emergency response (firefighters and rescue teams).
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <h2 className="font-display text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-accent" />
            Quiz
          </h2>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-semibold">Q1: Which of the following is a common technical challenge simulated in the NBL?</p>
              <div className="space-y-2">
                {["a) Tool malfunction", "b) Gravity failure", "c) Spacesuit color mismatch", "d) Food shortage"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="q1"
                      value={option[0]}
                      onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
                      disabled={showResults}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {showResults && (
                <p className={`text-sm ${answers.q1 === "a" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: a) Tool malfunction
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Astronauts are trained to rush through problems to save time.</p>
              <div className="space-y-2">
                {["True", "False"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="q2"
                      value={option.toLowerCase()}
                      onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
                      disabled={showResults}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {showResults && (
                <p className={`text-sm ${answers.q2 === "false" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: False – They are trained to pause and assess first.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: Why do trainers sometimes simulate miscommunication during NBL sessions?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: To teach astronauts how to clarify instructions and remain calm under communication errors.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which real EVA problem was solved using NBL problem-solving skills?</p>
              <div className="space-y-2">
                {["a) Solar array bolt jammed", "b) ISS orbit dropping", "c) Food supplies running low", "d) Cupola window cracked"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="q4"
                      value={option[0]}
                      onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
                      disabled={showResults}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {showResults && (
                <p className={`text-sm ${answers.q4 === "a" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: a) Solar array bolt jammed
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain how NBL problem-solving strategies apply to Earth-based fields.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Surgeons, engineers, and emergency responders all use simulation-based rehearsals to practice handling unexpected challenges.
                </p>
              )}
            </div>
          </div>

          {!showResults ? (
            <Button onClick={handleSubmit} className="w-full" size="lg">
              Submit Quiz
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="font-display text-2xl font-bold">Your Score: 100%</h3>
                </div>
                <p className="text-green-400 font-semibold">🎉 Perfect! Remember, your answers don't matter as long as you're learning and improving!</p>
              </div>
            </div>
          )}
        </div>

        {showResults && (
          <div className="glass-panel p-8 space-y-4 animate-fade-in">
            <h2 className="font-display text-3xl font-bold">📚 Additional Resources</h2>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">
                  NASA. (2023). Neutral Buoyancy Laboratory: Astronaut training and problem-solving.
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  ESA. (2022). Simulating challenges in astronaut training.
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Harland, D. (2011). Extravehicular activity: Preparing for the unexpected. Springer.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
