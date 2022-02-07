import Posts from "../db/models/Posts.js";

const MAX_POSTS_PER_REQUEST = 20;

const postsController = {};

postsController.getMany = async (req, res) => {
  try {
    let {page, count, ...options} = req.query;
    count = Math.min(MAX_POSTS_PER_REQUEST, count);
    page = page || 0;

    if (options.last === "true") {
      const previews = await Posts.find({}).sort({_id: -1}).skip(page * count).limit(count);
      res.json(previews);
      return;
    }

    const previews = await Posts.find({}).skip(page * count).limit(count);
    res.json(previews);

  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

postsController.getOne = async (req, res) => {
  try {
    const post = await Posts.findOne({_id: req.params.id});
    res.json(post);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}

export default postsController;
