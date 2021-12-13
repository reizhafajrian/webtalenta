import nc from "next-connect";
import { onError, onNoMatch } from "../../../backend/middleware/errorHandler";
import ArticleController from "../../../backend/controller/ArticleController";
import connectDB from "../../../backend/app.js";

export default connectDB(
  nc({ onError, onNoMatch })
    .post(ArticleController.create)
    .get(ArticleController.get)
    .put(ArticleController.update)
    .delete(ArticleController.delete)
);
