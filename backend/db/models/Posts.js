import mongoose from "mongoose";

const {Schema, model} = mongoose;

const Posts = new Schema({
  header: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true},
  image: {type: String},
  author: {type: String, required: true},
  date: {type: Number, required: true},
  content: {type: String, required: true},
  id: {type: Number}
});

export default model("posts", Posts);
