import express from 'express';
import eventsController from "../../controllers/eventController.js";

const eventsRouter = express.Router();

eventsRouter.get("", async (req, res) => {
  eventsController.get(req, res);
});

export default eventsRouter;

