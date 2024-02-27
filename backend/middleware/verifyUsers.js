import jwt from "jsonwebtoken";
import errorHandler from "./errorHandler.js";

const verifyToken = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw next(errorHandler(401, "Unauthorized"));
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw next(errorHandler(401, "Unauthorized"));
  }
};

export default verifyToken;
