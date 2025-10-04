import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson8() {
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
            <span className="gradient-text">Lesson 8:</span> EVA Training in the NBL
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Spacewalks—formally called extravehicular activities (EVAs)—are among the most challenging and dangerous tasks astronauts perform. To prepare for these missions, astronauts spend hundreds of hours in the Neutral Buoyancy Laboratory (NBL), where they simulate EVAs step by step.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 1: Suiting Up</h2>
            <p>
              The first step in EVA training is donning the Extravehicular Mobility Unit (EMU). In the NBL, astronauts use a modified version that allows for underwater breathing. Suiting up can take over an hour, teaching discipline and attention to detail.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 2: Entering the Pool</h2>
            <p>
              Once suited, astronauts are lowered into the NBL by a crane. Trainers adjust buoyancy until they hover neutrally. This moment represents the transition from "Earth mode" to "space mode."
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 3: Navigating ISS Mockups</h2>
            <p>
              Inside the pool are full-scale replicas of ISS modules and trusses. Astronauts must navigate these structures exactly as they would in space, using handrails, foot restraints, and tether points.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 4: Performing EVA Tasks</h2>
            <p>
              Once comfortable, astronauts rehearse actual EVA tasks: installing solar panels, replacing cooling components, running cables, and installing instruments. Each task is performed repeatedly until automatic.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 5: Robotic Arm Coordination</h2>
            <p>
              Many EVAs require coordination with the Canadarm2 robotic arm. Trainers simulate robotic arm operations while astronauts outside rehearse working in tandem with it.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 6: Communication Training</h2>
            <p>
              Clear communication is critical. Astronauts must report every step, confirm instructions, and alert the team to issues.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 7: Managing Fatigue</h2>
            <p>
              NBL training sessions can last six hours, similar to real spacewalks. Astronauts learn how to pace themselves, use handholds efficiently, and rest when needed.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Step 8: Debrief and Analysis</h2>
            <p>
              After training, astronauts undergo debriefing. Trainers review video footage, highlight errors, and suggest improvements. This cycle continues until astronauts can complete tasks smoothly.
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
              <p className="font-semibold">Q1: How many hours do astronauts typically train in the NBL for each hour of EVA in space?</p>
              <div className="space-y-2">
                {["a) 2", "b) 4", "c) 7", "d) 12"].map((option) => (
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
                <p className={`text-sm ${answers.q1 === "c" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: c) 7
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Astronauts in the NBL use real EMUs without modification.</p>
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
                  ✅ Correct Answer: False – They use modified EMUs for underwater training.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: Why do astronauts rehearse EVA tasks repeatedly in the NBL?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: To build muscle memory and ensure they can complete tasks reliably under stress.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which of the following is NOT a task astronauts practice in the NBL?</p>
              <div className="space-y-2">
                {["a) Installing solar panels", "b) Running electrical cables", "c) Operating submarines", "d) Using robotic arms"].map((option) => (
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
                <p className={`text-sm ${answers.q4 === "c" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: c) Operating submarines
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain how NBL EVA training methods benefit industries on Earth.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Similar step-by-step simulations and debriefing are used in surgery, aviation, and emergency response to improve safety and teamwork.
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
                <a href="https://www.nasa.gov/neutral-buoyancy-laboratory" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA - Spacewalk training at the Neutral Buoyancy Laboratory
                </a>
              </li>
              <li>
                <a href="https://www.esa.int/Science_Exploration/Astronauts" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  ESA - Astronaut training for extravehicular activities
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Canadian Space Agency. (2024). EVA preparation and training overview.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
