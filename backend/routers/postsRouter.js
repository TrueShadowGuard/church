import express from 'express';
import Posts from "../db/models/Posts.js";
const postsRouter = express.Router();

postsRouter.get('/:id', async (req, res) => {
  console.log(req.path)
  try {
    const post = await Posts.findOne({_id: req.params.id});
    res.json(post);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

export default postsRouter;

