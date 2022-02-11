const extractProperties = (from, keys) => {
  const result = {};
  for(let [key, value] of Object.entries(from)) {
    if(keys.includes(key)) result[key] = value;
  }
  return result;
}

export default extractProperties;
