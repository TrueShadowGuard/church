import mongoose from "mongoose";

const {Schema, model} = mongoose;

const Events = new Schema({
  header: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, default: "https://images.unsplash.com/photo-1470686164816-830d3688f62c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"},
  place: {type: String, required: true},
  date: {type: Number, required: true},
  content: {type: String, required: true},
  id: {type: Number}
});

export default model("events", Events);
