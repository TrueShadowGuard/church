import express from 'express';
import postsController from "../../controllers/postsController.js";
import addPostsCountHeader from "./addPostsCountHeader.js";

const postsRouter = express.Router();

postsRouter.use(addPostsCountHeader())

postsRouter.get("", async (req, res) => {
  postsController.get(req, res);
});

export default postsRouter;

