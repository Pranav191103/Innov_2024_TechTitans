import express from "express";
const Router = express.Router();
import { login, register } from "../controllers/auth.js";
Router.route("/login").post(login);
Router.route("/register").post(register);

export default Router;
