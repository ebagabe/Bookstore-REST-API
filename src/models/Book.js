import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: {
    type: String,
    required: [true, "The book title is mandatory"]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: [true, "The author's ID is mandatory"]
  },
  publisher: { type: String, required: [true, "The publisher name is mandatory"] },
  price: { type: Number },
  pages: { type: Number },
}, { versionKey: false });

const books = mongoose.model("books", bookSchema);

export default books;