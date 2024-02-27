import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();
import authRouter from "./routes/auth.js";
import languageRouter from "./routes/language.js";
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/language", languageRouter);
app.get("/", (req, res) => {
  res.send(`${port}`);
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
