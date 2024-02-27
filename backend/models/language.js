import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctOptionIndex: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quizzes: [quizSchema],
  completed: {
    type: Boolean,
    default: false,
  },
});

const languageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    levels: [levelSchema],
  },
  { timestamps: true }
);

const Language = mongoose.model("Language", languageSchema);

export default Language;
