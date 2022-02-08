import express from 'express';
import postsController from "../../controllers/posts.js";
import addPostsCountHeader from "./addPostsCountHeader.js";

const postsRouter = express.Router();

postsRouter.use(addPostsCountHeader())

postsRouter.get("", async (req, res) => {
  postsController.getMany(req, res);
});

postsRouter.get('/:id', async (req, res) => {
  postsController.getOne(req, res);
});

export default postsRouter;

