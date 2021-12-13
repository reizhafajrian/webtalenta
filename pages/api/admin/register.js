import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import ArticleController from "../../../backend/controller/ArticleController";
import connectDB from "../../../backend/app.js";
import UserController from "../../../backend/controller/UserController";

export default connectDB(
  nc({ onError, onNoMatch }).post(UserController.register)
);
