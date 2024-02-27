// Import necessary modules
import mongoose from "mongoose";
import Language from "./models/language.js";
import dotenv from "dotenv";
import { languageData } from "./quizInfo.js";
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Define sample levels and quizzes data

// Seeder function to insert levels and quizzes data into the database
const seedLevelsAndQuizzes = async () => {
  try {
    // Remove existing data
    await Language.deleteMany({});

    // Insert new data
    await Language.create(languageData);

    console.log("Levels and quizzes seeded successfully");
  } catch (error) {
    console.error("Error seeding levels and quizzes:", error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
};

// Call the seeder function
seedLevelsAndQuizzes();
