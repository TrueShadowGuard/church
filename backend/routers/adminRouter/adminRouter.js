import express from 'express';
import adminController from "../../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("", async (req, res) => {
  res.end();
});

export default adminRouter;

