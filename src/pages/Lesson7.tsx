import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Lesson7() {
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
            <span className="gradient-text">Lesson 7:</span> The Physics of Neutral Buoyancy
          </h1>
        </div>

        <div className="glass-panel p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              Training astronauts in the Neutral Buoyancy Laboratory (NBL) depends on a fascinating principle of physics: buoyancy. By understanding and carefully controlling this principle, trainers create an environment where astronauts feel almost weightless.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">What is Buoyancy?</h2>
            <p>
              Buoyancy is the upward force exerted by a fluid on an object placed in it. Archimedes discovered that the buoyant force equals the weight of the fluid displaced by the object. This is known as Archimedes' Principle.
            </p>
            <p>
              If the buoyant force equals the object's weight, the object achieves neutral buoyancy—it neither sinks nor floats.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Neutral Buoyancy for Astronauts</h2>
            <p>
              In the NBL, astronauts wear modified extravehicular mobility units (EMUs). These suits are adjusted with weights and foam "floaties" until the astronaut achieves neutral buoyancy. However, there are important differences from real space: water creates drag, orientation feels slower, and breathing/balance must be managed.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Adjusting Buoyancy in Practice</h2>
            <p>
              During training, divers carefully adjust an astronaut's buoyancy by adding or removing small weights or foam pieces. The goal is to make the astronaut "hover" in water, just as they would float in orbit.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Lessons in Physics from Buoyancy Training</h2>
            <p>
              Neutral buoyancy training teaches: forces in balance, center of gravity vs. center of buoyancy, Newton's Laws of Motion, and resistance effects.
            </p>

            <h2 className="font-display text-2xl font-bold mt-8 mb-4">Beyond Space: Applications of Neutral Buoyancy</h2>
            <p>
              The physics of neutral buoyancy is useful for scuba diving, engineering underwater construction, medicine rehabilitation, and robotics development.
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
              <p className="font-semibold">Q1: What principle explains buoyant force?</p>
              <div className="space-y-2">
                {["a) Newton's Third Law", "b) Archimedes' Principle", "c) Kepler's Laws", "d) Bernoulli's Principle"].map((option) => (
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
                  ✅ Correct Answer: b) Archimedes' Principle
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q2: Neutral buoyancy occurs when the buoyant force equals the object's weight.</p>
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
              <p className="font-semibold">Q3: Why is neutral buoyancy useful for astronaut training?</p>
              <textarea
                value={answers.q3 || ""}
                onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Because it closely simulates weightlessness, allowing astronauts to practice EVA tasks in conditions similar to space.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q4: Which factor makes water training slightly different from space?</p>
              <div className="space-y-2">
                {["a) Gravity disappears in water", "b) Water resistance creates drag", "c) Astronauts breathe liquid oxygen", "d) The EMU works differently"].map((option) => (
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
                <p className={`text-sm ${answers.q4 === "b" ? "text-green-400" : "text-red-400"}`}>
                  ✅ Correct Answer: b) Water resistance creates drag
                </p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Q5: Explain the importance of aligning the center of gravity and center of buoyancy in astronaut suits.</p>
              <textarea
                value={answers.q5 || ""}
                onChange={(e) => setAnswers({ ...answers, q5: e.target.value })}
                disabled={showResults}
                className="w-full p-3 rounded-lg bg-card border border-border text-foreground"
                rows={3}
              />
              {showResults && (
                <p className="text-sm text-green-400">
                  👉 Sample Answer: Misalignment causes astronauts to tilt or rotate uncontrollably; balancing both ensures stability during training and EVAs.
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
                  Archimedes. (ca. 250 BCE). On floating bodies.
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  ESA Education. (2023). Physics in space: Buoyancy and microgravity training.
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
