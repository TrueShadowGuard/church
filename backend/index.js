import express from "express";
import * as path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRouter from "./routers/postsRouter/postsRouter.js";
import eventsRouter from "./routers/eventsRouter/eventsRouter.js";
import Events from "./db/models/Events.js";
import resetCounters from "./test/dropCounters.js";
import createExampleEvents from "./test/createExampleEvents.js";
import createExamplePosts from "./test/createExamplePosts.js";
import Posts from "./db/models/Posts.js";

dotenv.config();
const app = express();

const __dirname = path.resolve();
const buildPath = path.join(path.join(__dirname, "..", "frontend", "build"));
const port = process.env.PORT || 4000;
const mongoKey = process.env.MONGO;


app.use("/posts", postsRouter);
app.use("/events", eventsRouter);

app.use(express.static(path.join(buildPath, "static")));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

async function main() {
  try {
    await mongoose.connect(mongoKey);
    // await resetCounters();
    // await Posts.deleteMany({});
    // await Events.deleteMany({});
    // await createExamplePosts(5);
    // await createExampleEvents(5);
    app.listen(port, () => console.log(`Started at ${port}`));
  } catch (e) {
    console.error(e);
    setTimeout(main, 10000);
  }
}

main();
