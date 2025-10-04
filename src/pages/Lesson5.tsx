import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson5() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    const checks = [
      answers.q1 === "c",
      answers.q2 === "false",
      answers.q3?.toLowerCase().includes("real") || answers.q3?.toLowerCase().includes("respond") || answers.q3?.toLowerCase().includes("flexible"),
      answers.q4 === "d",
      answers.q5?.toLowerCase().includes("visual") || answers.q5?.toLowerCase().includes("inspir") || answers.q5?.toLowerCase().includes("student")
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
            <span className="gradient-text">Lesson 5:</span> Astronaut Photography & Its Impact
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Since the earliest days of human spaceflight, astronauts have taken cameras with them into orbit. What began as a way to document their missions has evolved into one of the most powerful tools for science, education, and inspiration. Nowhere is this practice more important than in the Cupola of the International Space Station (ISS).
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Science Behind the Lens</h2>
            <p>
              Astronaut photography is not random. Crew members receive training before flight on how to use high-resolution cameras. They also get daily requests from Earth-based researchers through NASA's Earth Science division. From the Cupola, astronauts capture images with context and precision.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Documenting Change</h2>
            <p>
              Over the years, astronaut photographs have documented extraordinary changes on Earth: glacial retreat, deforestation, urban growth, and natural disasters. These photographs do more than just provide data—they create a visual record of Earth's transformation.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">The Art of Perspective</h2>
            <p>
              Beyond science, astronaut photography has enormous artistic and emotional value. The Cupola offers sweeping, unobstructed views that no other vantage point can provide. These images remind humanity of its home in a way that no textbook or lecture could.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Inspiring the Public</h2>
            <p>
              Astronauts frequently share their photos on social media, turning the Cupola into a bridge between space and Earth. These posts reach millions of followers, making space exploration personal and relatable. For students, astronaut photography brings abstract concepts to life.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Benefits Beyond Education</h2>
            <p>
              Astronaut photography also has direct practical benefits: disaster response, environmental monitoring, and policy influence. Visual evidence of environmental issues influences governments, NGOs, and the public to take action.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">A Shared Legacy</h2>
            <p>
              The tradition of astronaut photography has built a global archive of more than 4 million images. This archive is freely accessible through NASA's Image and Video Library. Each photo adds to humanity's collective memory.
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
              <p className="font-semibold">Q1: Approximately how many astronaut photographs are in NASA's archive?</p>
              <div className="space-y-2">
                {["a) 400,000", "b) 1 million", "c) 4 million", "d) 10 million"].map((option) => (
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
                  ✅ Correct Answer: c) 4 million
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Astronaut photography is only artistic and has no scientific value.</p>
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
                  ✅ Correct Answer: False – It supports disaster monitoring, climate studies, and urban growth research.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q3: Why do astronaut photographs often provide more value than satellite images?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Because astronauts can respond in real time, adjust framing, and provide human judgment.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which of the following has astronaut photography documented?</p>
              <div className="space-y-2">
                {["a) Glacial retreat", "b) Deforestation", "c) Urban growth", "d) All of the above"].map((option) => (
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
              <p className="font-semibold">Q5: Explain how astronaut photography influences education and public awareness.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: It provides visual evidence of abstract concepts (like climate change), engages students, and inspires global audiences through social media and outreach.
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
                <a href="https://images.nasa.gov" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA Image and Video Library
                </a>
              </li>
              <li>
                <a href="https://appliedsciences.nasa.gov/our-impact/news/how-astronauts-use-photography-help-people-earth" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  NASA Applied Sciences - How astronauts use photography
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
