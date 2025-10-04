import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    const checks = [
      answers.q1 === "c",
      answers.q2 === "true",
      answers.q3?.toLowerCase().includes("tether") || answers.q3?.toLowerCase().includes("drift"),
      answers.q4 === "d",
      answers.q5?.toLowerCase().includes("robot") || answers.q5?.toLowerCase().includes("safety")
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
            <span className="gradient-text">Lesson 3:</span> Monitoring Spacewalks from the Cupola
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              When astronauts venture outside the International Space Station (ISS), it is one of the most dangerous and inspiring parts of their mission. These extravehicular activities (EVAs), commonly known as spacewalks, are critical for maintaining and upgrading the station. The Cupola plays a vital role in making these operations possible.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">What Happens During a Spacewalk?</h2>
            <p>
              A spacewalk requires weeks of planning and many hours of preparation. Before exiting, astronauts put on their extravehicular mobility units (EMUs), which are essentially personal spacecraft. Once suited up, astronauts exit through an airlock. They move slowly, tethered to the ISS to prevent drifting away into space.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Cupola's Role in Spacewalks</h2>
            <p>
              Inside the ISS, astronauts in the Cupola track every movement of the spacewalkers. The Cupola offers a direct line of sight to critical areas of the station. Crew members use the Cupola's visibility to monitor safety, guide tasks, coordinate robotics by operating the Canadarm2, and document the EVA.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Robotics and the Cupola</h2>
            <p>
              One of the Cupola's most important functions during EVAs is serving as the control station for the Canadarm2. This robotic arm, stretching 17 meters (56 feet), is used to move astronauts into difficult-to-reach areas. From the Cupola, astronauts have the best possible view of the arm and its surroundings.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Emotional Dimension</h2>
            <p>
              Although spacewalks are highly technical operations, astronauts inside the Cupola often describe them as profoundly moving experiences. Watching their colleagues float against the backdrop of Earth, silhouetted by sunrises or auroras, reminds them of both the danger and the beauty of their work.
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
              <p className="font-semibold">Q1: What is the primary role of the Cupola during spacewalks?</p>
              <div className="space-y-2">
                {["a) Entertainment", "b) Observing Earth's beauty", "c) Monitoring and guiding EVAs", "d) Sleeping quarters"].map((option) => (
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
                  ✅ Correct Answer: c) Monitoring and guiding EVAs
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: The Canadarm2 can be operated from the Cupola to assist spacewalkers.</p>
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
              <p className="font-semibold">Q3: Why are astronauts always tethered to the ISS during EVAs?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: To prevent them from drifting away into space.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which tasks can be performed from the Cupola during an EVA?</p>
              <div className="space-y-2">
                {["a) Operating the robotic arm", "b) Providing verbal instructions", "c) Monitoring astronaut safety", "d) All of the above"].map((option) => (
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
              <p className="font-semibold">Q5: Explain how EVA monitoring from the Cupola benefits technology on Earth.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: It advances robotics (influencing robotic surgery), improves safety standards in hazardous industries, and enhances training systems.
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
                <a href="https://www.nasa.gov/mission_pages/station/spacewalks/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA - Spacewalks and extravehicular activities
                </a>
              </li>
              <li>
                <a href="https://www.asc-csa.gc.ca/eng/iss/canadarm2/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Canadian Space Agency - Canadarm2
                </a>
              </li>
              <li>
                <a href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Cupola" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  ESA - Cupola and its role in space operations
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
