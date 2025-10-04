import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson2() {
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
      <Button
        onClick={() => navigate("/cupola")}
        variant="outline"
        className="mb-6 gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cupola
      </Button>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Lesson 2:</span> Orbiting Earth
          </h1>
        </div>

        {/* Lesson Content */}
        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              If there is one fact that amazes people most about life aboard the International Space Station (ISS), it is the speed at which the station travels around our planet. The ISS is in low Earth orbit, circling at an altitude of about 400 kilometers (250 miles). At this height, the pull of Earth's gravity is still strong, but the forward speed of the station keeps it in continuous free fall, creating the sensation of weightlessness inside.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Incredible Speed of Orbit</h2>
            <p>
              The ISS travels at nearly 28,000 kilometers per hour (17,900 miles per hour). That is about ten times faster than a commercial airplane. This speed means that the entire planet can be circled in about 90 minutes. This rapid motion creates a rhythm that defines astronauts' lives in space. Every 45 minutes, the sun either rises or sets. This leads to 16 sunrises and 16 sunsets each day.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Earth in Constant Change</h2>
            <p>
              From the Cupola's panoramic view, Earth appears alive with constant movement. Clouds form and dissipate, storms swirl, and entire continents slide by beneath the station in minutes. An astronaut can look down at the Amazon rainforest at one moment and, less than 20 minutes later, gaze at the Sahara Desert.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Lessons About Earth's Fragility</h2>
            <p>
              The orbital perspective also highlights how thin and delicate Earth's atmosphere is. From the Cupola, the atmosphere appears as a narrow blue line surrounding the planet. This thin shell is all that protects life on Earth from the vacuum of space and harmful solar radiation. Borders, wars, and politics vanish from this view. This is why many astronauts describe the "overview effect."
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Science Enabled by Orbit</h2>
            <p>
              The ISS's orbital path was chosen carefully so that the station passes over about 90% of Earth's population. This makes the Cupola an excellent observation post for science. The constant motion also provides unique scientific opportunities.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Human Experience of Orbit</h2>
            <p>
              For astronauts, orbiting Earth is not only a scientific journey but also a deeply emotional one. Watching the planet spin below them every 90 minutes can make time feel strange. Many astronauts use their free time to float into the Cupola and simply watch the world below.
            </p>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="glass-panel p-8 space-y-6">
          <h2 className="font-display text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-accent" />
            Quiz
          </h2>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="space-y-3">
              <p className="font-semibold">Q1: How long does it take the ISS to complete one orbit around Earth?</p>
              <div className="space-y-2">
                {["a) 45 minutes", "b) 90 minutes", "c) 12 hours", "d) 24 hours"].map((option) => (
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
                  ✅ Correct Answer: b) 90 minutes
                </p>
              )}
            </div>

            {/* Q2 */}
            <div className="space-y-3">
              <p className="font-semibold">Q2: Astronauts see 24 sunrises and 24 sunsets each day.</p>
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
                  ✅ Correct Answer: False – They see 16 sunrises and 16 sunsets.
                </p>
              )}
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <p className="font-semibold">Q3: Why does the atmosphere appear as a thin blue line from the Cupola?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
                placeholder="Type your answer here..."
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Because Earth's atmosphere is very thin compared to the planet's size, and sunlight passing through it makes it glow blue.
                </p>
              )}
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <p className="font-semibold">Q4: What percentage of Earth's population lies beneath the ISS's orbital path?</p>
              <div className="space-y-2">
                {["a) 50%", "b) 70%", "c) 90%", "d) 100%"].map((option) => (
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
                  ✅ Correct Answer: c) 90%
                </p>
              )}
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain what astronauts mean by the "overview effect."</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
                placeholder="Type your answer here..."
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: The psychological shift experienced when seeing Earth as one interconnected, borderless system, leading to a deeper sense of unity and responsibility for protecting the planet.
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
                <a
                  href="https://www.nasa.gov/mission_pages/station/main/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  NASA - International Space Station facts and figures
                </a>
              </li>
              <li>
                <a
                  href="https://earthobservatory.nasa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  NASA Earth Observatory - ISS Earth timelapse imagery
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  White, F. (2014). The overview effect: Space exploration and human evolution. American Institute of Aeronautics and Astronautics.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
