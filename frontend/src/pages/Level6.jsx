import React, { useState } from "react";

function Level6() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState("");

  const handleChoice = (choice) => {
    if (step === 1) {
      if (choice === "left") {
        setStep(2);
      } else if (choice === "right") {
        setResult("You encounter a dead end, and the journey ends here.");
      }
    } else if (step === 2) {
      if (choice === "yes") {
        setStep(3);
      } else if (choice === "no") {
        setResult("You decide to turn back, and the journey ends here.");
      }
    } else if (step === 3) {
      if (choice === "yes") {
        setStep(4);
      } else if (choice === "no") {
        setResult(
          "You decide to leave the village, and the journey ends here."
        );
      }
    } else if (step === 4) {
      if (choice === "echo") {
        setResult(
          "Congratulations! You have successfully solved the riddle and uncovered the secret of the village. The journey ends here, and you emerge victorious."
        );
      } else {
        setResult(
          "Unfortunately, your answer is incorrect, and you must try another path to discover the truth."
        );
      }
    }
  };

  const handleGoBack = () => {
    setResult("");
    setStep(1);
  };

  const handleRestart = () => {
    setResult("");
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Case Study Riddle Adventure
        </h1>
        {result ? (
          <div className="text-center">
            <p
              className={`${
                result.includes("Congratulations")
                  ? "text-orange-500"
                  : "text-red-500"
              } text-lg`}
            >
              {result}
            </p>
            {result.includes("dead end") && (
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleGoBack}
              >
                Go Back
              </button>
            )}
            {!result.includes("Congratulations") && (
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleRestart}
              >
                Restart
              </button>
            )}
          </div>
        ) : (
          <div>
            {step === 1 && (
              <div>
                <p className="mb-4">
                  You find yourself in a mysterious forest, surrounded by
                  towering trees and chirping birds. As you walk deeper into the
                  woods, you stumble upon a fork in the path. To your left, the
                  path is bathed in sunlight, while to your right, it disappears
                  into the shadows. Which path will you choose?
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("left")}
                  >
                    Left
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("right")}
                  >
                    Right
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <p className="mb-4">
                  You emerge from the forest onto the banks of a tranquil river.
                  Across the river, you spot a quaint village with smoke curling
                  from chimneys. The only way across is a rickety old bridge
                  that sways in the wind. Do you dare to cross?
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("yes")}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("no")}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <p className="mb-4">
                  You successfully cross the bridge and arrive at the village.
                  However, you notice that the village is eerily quiet, with no
                  signs of life. As you explore further, you come across a
                  locked gate barring the entrance to the village square. Will
                  you try to pick the lock?
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("yes")}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("no")}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <p className="mb-4">
                  You manage to pick the lock and enter the village square, only
                  to find it deserted. In the center of the square stands a
                  weathered statue of a wise old owl. At its feet lies a riddle
                  carved into a stone tablet. Can you solve the riddle?
                </p>
                <p className="mb-4">
                  Riddle: "I speak without a mouth and hear without ears. I have
                  no body, but I come alive with wind. What am I?"
                </p>
                <div className="flex justify-center">
                  <button
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("echo")}
                  >
                    Echo
                  </button>
                  <button
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("whisper")}
                  >
                    Whisper
                  </button>
                  <button
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("shadow")}
                  >
                    Shadow
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={() => handleChoice("voice")}
                  >
                    Voice
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Level6;
