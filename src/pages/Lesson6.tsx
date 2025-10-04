import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson6() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    const checks = [
      answers.q1 === "c",
      answers.q2 === "false",
      answers.q3?.toLowerCase().includes("continuous") || answers.q3?.toLowerCase().includes("hours"),
      answers.q4 === "c",
      answers.q5?.toLowerCase().includes("medical") || answers.q5?.toLowerCase().includes("rehab") || answers.q5?.toLowerCase().includes("robot")
    ];
    correctCount = checks.filter(Boolean).length;
    setScore((correctCount / 5) * 100);
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
            <span className="gradient-text">Lesson 6:</span> Introduction to the Neutral Buoyancy Laboratory
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Before astronauts ever set foot outside the International Space Station (ISS) for a spacewalk, they spend hundreds of hours training on Earth. The most important facility for this preparation is the Neutral Buoyancy Laboratory (NBL), located at NASA's Johnson Space Center in Houston, Texas.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">What is the NBL?</h2>
            <p>
              The Neutral Buoyancy Laboratory is essentially a giant underwater training ground. It is 220 feet long, 102 feet wide, and 40 feet deep, holding an incredible 6.2 million gallons of water. Inside, engineers have placed full-scale mockups of ISS modules, trusses, and equipment.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Why Water?</h2>
            <p>
              Water provides the closest practical approximation of microgravity available on Earth. Unlike short bursts of weightlessness on parabolic flights, the NBL allows astronauts to experience continuous "weightlessness-like" conditions for hours.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Training for Spacewalks</h2>
            <p>
              For every hour an astronaut spends performing an EVA in space, they train for about seven hours in the NBL. During a training session, astronauts put on modified suits called training EMUs weighted with precise adjustments to achieve neutral buoyancy.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Role of Divers and Trainers</h2>
            <p>
              The NBL is not only for astronauts—it also relies on a large team of divers, trainers, and engineers. Divers guide astronauts, position equipment, and simulate the resistance of tethers or cables.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Safety and Challenges</h2>
            <p>
              While the NBL is designed to be safe, training is still physically and mentally demanding. Wearing a pressurized suit underwater for up to six hours is exhausting.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Benefits Beyond Space</h2>
            <p>
              The Neutral Buoyancy Laboratory benefits science and technology on Earth through medical research, robotics development, and engineering innovations.
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
              <p className="font-semibold">Q1: How many gallons of water does the NBL hold?</p>
              <div className="space-y-2">
                {["a) 2 million", "b) 4 million", "c) 6.2 million", "d) 10 million"].map((option) => (
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
                  ✅ Correct Answer: c) 6.2 million
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Neutral buoyancy means astronauts float at the surface of the water.</p>
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
                  ✅ Correct Answer: False – It means they neither sink nor float.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: Why is water chosen for simulating microgravity instead of only parabolic flights?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Because water allows continuous "weightlessness-like" training for hours, while parabolic flights provide only short bursts.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: For every hour of EVA in space, astronauts train for about how many hours in the NBL?</p>
              <div className="space-y-2">
                {["a) 2", "b) 4", "c) 7", "d) 10"].map((option) => (
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
                  ✅ Correct Answer: c) 7
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain two ways the NBL benefits Earth-based science or technology.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Medical rehabilitation techniques and underwater robotics/engineering development.
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
                  NASA - Neutral Buoyancy Laboratory overview
                </a>
              </li>
              <li>
                <a href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  ESA - Astronaut training facilities
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  NASA Johnson Space Center. (2024). NBL factsheet.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
