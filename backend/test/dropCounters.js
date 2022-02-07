import Counters from "../db/models/Counters.js";

export default async function resetCounters() {
  await Counters.updateMany({}, {value: 0});
}
