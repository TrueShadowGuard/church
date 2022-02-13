import mongoose from "mongoose";

const {Schema, model} = mongoose;

const Subscribers = new Schema({
  email: {type: 'string', required: true}
});

export default model("subscribers", Subscribers);
