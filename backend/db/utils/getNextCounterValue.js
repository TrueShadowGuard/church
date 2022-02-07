import Counters from "../models/Counters.js";

export default async function getNextCounterValue(name) {
  const counter = await Counters.findOne({name});
  counter.value++;
  await counter.save();
  return counter.value;
}
