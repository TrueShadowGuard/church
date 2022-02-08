import Posts from "../../db/models/Posts.js";

export default function addPostsCountHeader() {
  return async (req, res, next) => {
    const postsCount = await Posts.count({});
    res.set('Access-Control-Expose-Headers', "X-Total-Count");
    res.setHeader("X-Total-Count", postsCount)
    next();
  }
}
