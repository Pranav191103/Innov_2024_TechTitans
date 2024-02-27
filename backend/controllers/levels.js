import Language from "../models/language.js";
export const getCurrentLevelAndQuiz = async (req, res) => {
  const { userId } = req.params; // Assuming userId is passed as a parameter in the request

  try {
    // Find the language by user ID
    const language = await Language.findOne({ userID: userId });

    if (!language) {
      return res
        .status(404)
        .json({ message: "Language not found for this user" });
    }

    // Initialize current level and quiz indices
    let currentLevelIndex = 0;
    let currentQuizIndex = 0;

    // Iterate through levels and quizzes to find current level and quiz
    for (let i = 0; i < language.levels.length; i++) {
      const level = language.levels[i];
      for (let j = 0; j < level.quizzes.length; j++) {
        const quiz = level.quizzes[j];
        if (!quiz.completed) {
          // Found current level and quiz
          currentLevelIndex = i;
          currentQuizIndex = j;
          // Return current progress
          return res.status(200).json({
            currentLevel: currentLevelIndex,
            currentLevelInfo: level,
            currentQuizInfo: quiz,
            currentQuizIndex,
          });
        }
      }
    }

    // If all quizzes are completed, check if it's the last level
    if (currentLevelIndex === language.levels.length - 1) {
      // All quizzes completed, and it's the last level
      return res.status(200).json({
        message: "Congratulations! You have completed all levels.",
      });
    }

    // All quizzes in current level completed, move to the next level
    currentLevelIndex++;
    const nextLevel = language.levels[currentLevelIndex];
    if (!nextLevel || !nextLevel.quizzes || nextLevel.quizzes.length === 0) {
      return res
        .status(404)
        .json({ message: "No quizzes found for the next level" });
    }

    // Update current quiz index for the next level
    currentQuizIndex = 0;

    // Return current progress for the next level
    return res.status(200).json({
      currentLevel: currentLevelIndex,
      currentLevelInfo: nextLevel,
      currentQuizInfo: nextLevel.quizzes[currentQuizIndex],
      currentQuizIndex,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const completeQuiz = async (req, res) => {
  const { userId } = req.params;
  const { quizId } = req.body;

  try {
    // Find the language by user ID
    const language = await Language.findOne({ userID: userId });

    if (!language) {
      return res
        .status(404)
        .json({ message: "Language not found for this user" });
    }

    // Find the quiz by ID and update its completion status
    for (const level of language.levels) {
      for (const quiz of level.quizzes) {
        if (quiz._id.toString() === quizId) {
          quiz.completed = true;
          break; // Assuming quiz IDs are unique, no need to continue searching
        }
      }
    }

    // Save the updated language document
    await language.save();

    res
      .status(200)
      .json({ message: "Quiz completion status updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const completeLevel = async (req, res) => {
  const { userId } = req.params;
  const { levelId } = req.body;

  try {
    // Find the language by user ID
    const language = await Language.findOne({ userID: userId });

    if (!language) {
      return res
        .status(404)
        .json({ message: "Language not found for this user" });
    }

    // Find the level by ID and update its completion status
    for (const level of language.levels) {
      if (level._id.toString() === levelId) {
        level.completed = true;
        break; // Assuming level IDs are unique, no need to continue searching
      }
    }

    // Save the updated language document
    await language.save();

    res
      .status(200)
      .json({ message: "Level completion status updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
