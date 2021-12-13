import mongoose from "mongoose";

const article = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  link:{
    type: String,
    required: false,
  },
  tag: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
    },
  ],
  type: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

let ArticleSchema = null;
try {
  ArticleSchema = mongoose.model("Article", article);
} catch (e) {
  ArticleSchema = mongoose.model("Article");
}

export default ArticleSchema;
