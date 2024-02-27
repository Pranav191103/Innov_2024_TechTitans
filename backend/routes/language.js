import express from "express";
const Router = express.Router();
import verifyToken from "../middleware/verifyUsers.js";
import {
  getCurrentLevelAndQuiz,
  completeQuiz,
  completeLevel,
} from "../controllers/levels.js";

Router.get("/user/:userId", verifyToken, getCurrentLevelAndQuiz);
Router.post("/user/:userId/complete-quiz", verifyToken, completeQuiz);
Router.post("/user/:userId/complete-level", verifyToken, completeLevel);

export default Router;
