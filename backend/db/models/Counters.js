import mongoose from "mongoose";

const {model, Schema} = mongoose;

const Counters = new Schema({
  name: {type: String, required: true},
  value: {type: Number, default: 0}
});

export default model("counters", Counters);
