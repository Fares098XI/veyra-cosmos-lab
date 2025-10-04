import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson4() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    const checks = [
      answers.q1 === "d",
      answers.q2 === "false",
      answers.q3?.toLowerCase().includes("flexible") || answers.q3?.toLowerCase().includes("real") || answers.q3?.toLowerCase().includes("human"),
      answers.q4 === "d",
      answers.q5?.toLowerCase().includes("data") || answers.q5?.toLowerCase().includes("inspir")
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
      <Button onClick={() => navigate("/cupola")} variant="outline" className="mb-6 gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Cupola
      </Button>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Lesson 4:</span> Earth Observation & Disaster Monitoring
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              One of the most powerful contributions of the International Space Station (ISS) to humanity is its role in Earth observation. Through the Cupola, astronauts serve as active participants in global science and disaster response. Unlike satellites that follow pre-programmed paths, astronauts can make real-time observations and respond quickly to emerging events.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Human Advantage in Earth Observation</h2>
            <p>
              While satellites provide broad, automated coverage, astronauts in the Cupola offer flexibility and adaptability. If a hurricane, wildfire, or volcanic eruption occurs, astronauts can pivot, aim their cameras, and capture images immediately. This makes Cupola photography an invaluable supplement to satellite imaging.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Disaster Monitoring in Action</h2>
            <p>
              Over the years, astronauts in the Cupola have helped monitor many types of natural disasters including hurricanes & typhoons, wildfires, volcanic eruptions, and flooding. Each demonstrates how the Cupola transforms astronauts into real-time Earth observers.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Long-Term Climate Science</h2>
            <p>
              Disaster monitoring is urgent, but the Cupola also contributes to long-term climate studies. Astronaut photography has documented the shrinking of glaciers, desertification, deforestation, and urban growth. These datasets are combined with satellite records to provide richer information.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Educational & Social Impact</h2>
            <p>
              Beyond science, Earth observation through the Cupola has an enormous impact on education and public awareness. Photos taken by astronauts are shared worldwide, inspiring millions to care about environmental issues.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Bigger Picture: Unity Through Observation</h2>
            <p>
              Perhaps the most profound lesson of Earth observation from the Cupola is the sense of unity it inspires. When astronauts photograph disasters or environmental issues, they remind us that these challenges do not respect borders.
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
              <p className="font-semibold">Q1: Which of the following disasters have astronauts monitored from the Cupola?</p>
              <div className="space-y-2">
                {["a) Hurricanes", "b) Wildfires", "c) Volcanic eruptions", "d) All of the above"].map((option) => (
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
                <p className={`text-sm ${answers.q1 === "d" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: d) All of the above
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Cupola photography can only be used for artistic purposes, not scientific ones.</p>
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
                  ✅ Correct Answer: False – It is used for disaster monitoring and climate science.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: What is the key advantage astronauts have over satellites when monitoring disasters?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Human flexibility to respond immediately and frame images contextually.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which of the following long-term changes have been documented through Cupola imagery?</p>
              <div className="space-y-2">
                {["a) Shrinking glaciers", "b) Desertification", "c) Urban expansion", "d) All of the above"].map((option) => (
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
                <p className={`text-sm ${answers.q4 === "d" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: d) All of the above
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain how Cupola-based Earth observation benefits both science and education.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Scientifically, it provides data for climate and disaster research. Educationally, it inspires students and the public to care about the environment.
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
                <a href="https://earthobservatory.nasa.gov" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA Earth Science Division - Earth observations from the ISS
                </a>
              </li>
              <li>
                <a href="https://appliedsciences.nasa.gov/our-impact/news/how-astronauts-use-photography-help-people-earth" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA Applied Sciences - How astronauts use photography
                </a>
              </li>
              <li>
                <a href="https://www.esa.int/Applications/Observing_the_Earth" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  ESA - Observing Earth from the ISS
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
