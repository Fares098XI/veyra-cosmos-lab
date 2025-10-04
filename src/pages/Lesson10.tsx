import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson10() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    const checks = [
      answers.q1 === "b",
      answers.q2 === "true",
      answers.q3?.toLowerCase().includes("communicat") || answers.q3?.toLowerCase().includes("stress") || answers.q3?.toLowerCase().includes("calm"),
      answers.q4 === "a",
      answers.q5?.toLowerCase().includes("inspir") || answers.q5?.toLowerCase().includes("student") || answers.q5?.toLowerCase().includes("stem")
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
            <span className="gradient-text">Lesson 10:</span> Earth Applications of NBL Training
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              At first glance, the Neutral Buoyancy Laboratory (NBL) may appear to serve only one purpose: preparing astronauts for spacewalks. But the lessons learned inside this massive pool extend far beyond space. The techniques, technologies, and problem-solving strategies developed at the NBL have had direct benefits for Earth.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Medicine and Rehabilitation</h2>
            <p>
              One of the most surprising benefits of neutral buoyancy training is in the field of medicine. Rehabilitation specialists realized that the NBL's approach could be applied to help patients recovering from injury. Physical therapy using water therapy allows patients to relearn movements, and balance training helps patients regain coordination.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Engineering and Underwater Construction</h2>
            <p>
              The NBL has influenced engineering practices. Large underwater construction projects require divers to handle complex tools. Engineers borrow techniques from NBL simulations: training workers in mockups, using buoyancy calculations, and practicing emergency scenarios.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Robotics and Technology</h2>
            <p>
              Robotics is another field transformed by NBL insights. The coordination between humans and robots in the NBL has influenced robotic surgery, underwater drones (AUVs), and remote operations for oil rigs and disaster zones.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Education and STEM Inspiration</h2>
            <p>
              The NBL is a powerful tool for education. By sharing videos, demonstrations, and outreach programs, NASA and ESA show students how science and engineering are applied in real-world challenges, inspiring young people to pursue STEM careers.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Psychology and Team Training</h2>
            <p>
              The NBL strengthens psychological resilience. Astronauts train to remain calm under stress, communicate clearly, and trust their team. Emergency responders, firefighters, and pilots use similar simulation-based training.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Broader Societal Impacts</h2>
            <p>
              The NBL symbolizes international cooperation. Astronauts from NASA, ESA, JAXA, and other space agencies all train in Houston. This collaboration demonstrates that global challenges require teamwork.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Case Studies of Earth Applications</h2>
            <p>
              Medical therapy pools, offshore engineering, disaster response robots, and education programs all benefit from NBL-inspired techniques.
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
              <p className="font-semibold">Q1: Which medical field has benefited directly from NBL training techniques?</p>
              <div className="space-y-2">
                {["a) Dentistry", "b) Physical therapy", "c) Dermatology", "d) Ophthalmology"].map((option) => (
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
                <p className={`text-sm ${answers.q1 === "b" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: b) Physical therapy
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: NBL-inspired robotics has influenced underwater drones and robotic surgery.</p>
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
                <p className={`text-sm ${answers.q2 === "true" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: True
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: How does NBL training help emergency responders on Earth?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: By teaching clear communication, calmness under stress, and problem-solving through simulations.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which of the following industries has adopted NBL-like practices?</p>
              <div className="space-y-2">
                {["a) Offshore engineering", "b) Agriculture", "c) Fashion", "d) Literature"].map((option) => (
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
                  ✅ Correct Answer: a) Offshore engineering
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain how NBL training benefits education and STEM outreach.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: It inspires students to pursue STEM careers, demonstrates physics principles, and shows the link between science, teamwork, and real-world applications.
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
                  NASA Johnson Space Center. (2023). Neutral Buoyancy Laboratory overview.
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  ESA Education. (2023). From underwater to space: Learning with buoyancy.
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Lampropoulos, G., & Kinshuk. (2024). Virtual reality and gamification in education. Educational Technology Research and Development, 72(5), 1691–1785.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
