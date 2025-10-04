import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson1() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    q1: "c",
    q2: "false",
    q3: "one whole planet",
    q4: "1a-2b-3c",
    q5: "flexibility",
  };

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
            <span className="gradient-text">Lesson 1:</span> The Cupola Window
          </h1>
        </div>

        {/* Lesson Content */}
        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              The Cupola is often described by astronauts as the most breathtaking and emotionally powerful place on the International Space Station (ISS). Installed in 2010, this dome-shaped module with seven windows has become both a practical workspace and a place of inspiration. The Cupola, designed and built by the European Space Agency, was added to the ISS to improve astronauts' ability to observe Earth, conduct space operations, and interact with their environment in ways no camera or instrument could fully replicate.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">A Window to the World</h2>
            <p>
              When astronauts first float into the Cupola, they are often struck silent. Through its wide, multi-angled windows, Earth appears in full panoramic detail. Continents drift by in just minutes, oceans stretch endlessly, and clouds swirl in mesmerizing patterns. From orbit, the colors of Earth are sharper and more vivid than anything most people have seen on the ground. The contrast of the glowing blues of the ocean, the greens and browns of forests and deserts, and the white snowcaps of mountains create a living painting.
            </p>
            <p>
              But what truly moves astronauts is the sight of Earth as one whole planet. Unlike the maps and borders we see on the ground, from the Cupola no lines separate countries. There is only one shared home, fragile and beautiful, floating in the darkness of space. Many astronauts have said that looking through the Cupola gave them a profound sense of unity and responsibility toward protecting Earth.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Beyond the View – A Functional Hub</h2>
            <p>
              The Cupola was not added only for enjoyment. It plays a critical role in ISS operations. Astronauts use it as a control center to monitor and direct activities outside the station. For example, the Cupola provides the perfect vantage point for controlling the Canadarm2, the ISS's massive robotic arm. This robotic arm is essential for capturing supply spacecraft, installing equipment, and supporting repairs. From the Cupola, astronauts have direct visual feedback, which makes robotic operations much safer and more accurate.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Emotional Impact on Astronauts</h2>
            <p>
              While the Cupola is technically an observation module, its emotional impact is often what astronauts talk about most. Many astronauts have described floating in the Cupola as life-changing. They watch 16 sunrises and 16 sunsets every day, each lasting only moments. City lights sparkle across continents, lightning storms flash in the distance, and auroras paint the sky with green and purple curtains.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Science Through the Window</h2>
            <p>
              Photography from the Cupola is more than just beautiful imagery. It supports vital scientific and humanitarian missions. During hurricanes or wildfires, astronauts can capture real-time images that help emergency response teams plan evacuations and relief. In addition to disaster monitoring, Cupola imagery contributes to long-term studies of climate change.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">A Legacy of Inspiration</h2>
            <p>
              Perhaps most importantly, the Cupola symbolizes humanity's progress. It shows how international cooperation—NASA, ESA, and other space partners—can create something extraordinary that benefits not just astronauts but all of humanity.
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
              <p className="font-semibold">Q1: How many windows does the Cupola have?</p>
              <div className="space-y-2">
                {["a) 3", "b) 5", "c) 7", "d) 9"].map((option) => (
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

            {/* Q2 */}
            <div className="space-y-3">
              <p className="font-semibold">Q2: The Cupola is used only for sightseeing and relaxation.</p>
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
                  ✅ Correct Answer: False – It is also used for robotics and monitoring spacewalks.
                </p>
              )}
            </div>

            {/* Q3 */}
            <div className="space-y-3">
              <p className="font-semibold">Q3: Why do astronauts describe the Cupola as "life-changing"?</p>
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
                  👉 Sample Answer: Because it gives them a direct view of Earth's beauty and fragility, making them feel connected to the planet as one whole.
                </p>
              )}
            </div>

            {/* Q4 */}
            <div className="space-y-3">
              <p className="font-semibold">Q4: Match the Cupola function with its description:</p>
              <div className="space-y-2 text-sm">
                <p>1. Robotic arm control → a. Guides Canadarm2 for docking and repairs</p>
                <p>2. EVA observation → b. Tracks astronauts during spacewalks</p>
                <p>3. Photography → c. Captures disasters, climate change, and Earth's beauty</p>
              </div>
              <input
                type="text"
                value={answers.q4 || ""}
                onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                placeholder="Enter as: 1a-2b-3c"
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  ✅ Correct Answer: 1-a, 2-b, 3-c
                </p>
              )}
            </div>

            {/* Q5 */}
            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain how Cupola photography complements satellite data.</p>
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
                  👉 Sample Answer: Astronauts can quickly react to unfolding events and capture images at the right moment, while satellites follow fixed paths and schedules. This human flexibility adds valuable context.
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
                  <h3 className="font-display text-2xl font-bold">
                    Your Score: 100%
                  </h3>
                </div>
                <p className="text-green-400 font-semibold mb-4">
                  🎉 Great job! Remember, your answers don't matter as long as you are learning and improving!
                </p>
                
                {/* Show Correct Answers */}
                <div className="mt-6 space-y-3 text-sm">
                  <h4 className="font-bold text-lg mb-3">📝 Answer Key:</h4>
                  <div className="space-y-2 bg-card/40 p-4 rounded-lg">
                    <p><strong>Q1:</strong> c) 7</p>
                    <p><strong>Q2:</strong> False – It is also used for robotics and monitoring spacewalks</p>
                    <p><strong>Q3:</strong> Because it gives them a direct view of Earth's beauty and fragility, making them feel connected to the planet as one whole</p>
                    <p><strong>Q4:</strong> 1-a (Robotic arm control → Guides Canadarm2), 2-b (EVA observation → Tracks spacewalks), 3-c (Photography → Captures disasters and climate data)</p>
                    <p><strong>Q5:</strong> Astronauts can quickly react to unfolding events while satellites follow fixed paths. This human flexibility adds valuable context.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resources - Always show with results */}
        {showResults && (
          <div className="glass-panel p-8 space-y-4 animate-fade-in">
            <h2 className="font-display text-3xl font-bold">📚 Additional Resources</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.nasa.gov/mission_pages/station/structure/elements/cupola.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  NASA - International Space Station: Cupola module overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/Cupola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  ESA - Cupola facts and history
                </a>
              </li>
              <li>
                <a
                  href="https://appliedsciences.nasa.gov/our-impact/news/how-astronauts-use-photography-help-people-earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  NASA Applied Sciences - How astronauts use photography to help people on Earth
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
