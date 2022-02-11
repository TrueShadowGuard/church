import Posts from "../db/models/Posts.js";
import extractProperties from "../utils/objects/extractProperties.js";
import {
  extractFilterFromQuery,
  extractOptionsFromQuery,
  makePropsRegexSearched
} from "../utils/controllerHelpers.js";

const MAX_POSTS_PER_REQUEST = 20;

const postsController = {};

postsController.get = async (req, res) => {
  try {
    let page = req.query.page || 0;
    let count = req.query.count || 1;
    count = Math.min(MAX_POSTS_PER_REQUEST, count);

    let filter = extractFilterFromQuery(req.query);
    filter = makePropsRegexSearched(filter, ["header"]);

    const options = extractOptionsFromQuery(req.query);

    const query = Posts.find(filter, {_id: 0});
    if (options.last === "true") query.sort({_id: -1});
    const posts = await query
      .skip(page * count)
      .limit(count);

    res.json(posts);

  } catch
    (e) {
    console.error(e);
    res.status(500).end();
  }
};

export default postsController;
