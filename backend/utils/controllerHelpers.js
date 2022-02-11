import extractProperties from "./objects/extractProperties.js";

export const extractFilterFromQuery = query => {
  const acceptableKeys = ["id", "header"];
  return extractProperties(query, acceptableKeys);
};

export const extractOptionsFromQuery = query => {
  const acceptableKeys = ["last"];
  return extractProperties(query, acceptableKeys);
};

export const makePropsRegexSearched = (filter, props) => {
  filter = {...filter};
  for(let key of props) {
    if(key in filter) {
      filter[key] = {$regex: filter[key], $options: "i"}
    }
  }
  return filter;
};

