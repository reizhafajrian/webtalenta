import { type } from "os";
import connectDB from "../app";
import Article from "../models/article";
const { check } = require("express-validator");

const {
  validationHandler,
  validations,
} = require("../middleware/ValidationHandler");

const ArticleController = {
  create: async (req, res) => {
    try {
      const { title, description, image, tag, link, type } = req.body;
      let article = null;
      if (type === true) {
        // await validationHandler(
        //   req,
        //   res,
        //   validations([
        //     check("title", "Title is required!").not().isEmpty(),
        //     check("tag", "Tag is required!").not().isEmpty(),
        //     check("description", "fill the description").not().isEmpty(),
        //     check("image", "Invalid").notEmpty().isArray(),
        //   ])
        // );
        article = await Article.create({
          title,
          description,
          image,
          tag,
          type,
        });
      } else {
        article = await Article.create({
          link,
          tag,
          type,
        });
      }
      res.status(201).send({
        status: 201,
        message: "Article created successfully",
        article,
      });
    } catch (error) {
      //   console.log(error);
      throw error;
    }
  },
  get: async (req, res) => {
    const data = await Article.find();
    res.status(200).send(data);
  },
  update: async (req, res) => {
    const { title, description, image, tag, id } = req.body;
    console.log(title, description, image, tag, id);
    const article = await Article.findByIdAndUpdate(id, {
      title,
      description,
      image,
      tag,
    });

    res.status(200).send({
      status: 200,
      message: "Article updated successfully",
      article,
    });
  },
  delete: async (req, res) => {
    const { id } = req.body;
    console.log(id);
    const article = await Article.findByIdAndDelete(id);
    res.status(200).send({
      status: 200,
      message: "Article deleted successfully",
      article,
    });
  },
  getTag: async (req, res) => {
    const tag = await Article.find().distinct("tag");
    return res.status(200).send(tag);
  },
};
module.exports = ArticleController;
