import express from 'express';
import postsController from "../controllers/posts.js";

const postsRouter = express.Router();

postsRouter.get("", async (req, res) => {
  postsController.getMany(req, res);
});

postsRouter.get('/:id', async (req, res) => {
  postsController.getOne(req, res);
});

export default postsRouter;

