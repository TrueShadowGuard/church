import express from "express";
import * as path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createExamplePosts from "./test/createExamplePosts.js";
import postsRouter from "./routers/postsRouter.js";
import resetCounters from "./test/dropCounters.js";

dotenv.config();
const app = express();

const __dirname = path.resolve();
const buildPath = path.join(path.join(__dirname, "..", "frontend", "build"));
const port = process.env.PORT || 4000;
const mongoKey = process.env.MONGO;


app.use("/posts", postsRouter);

app.use(express.static(path.join(buildPath, "static")));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

async function main() {
  try {
    await mongoose.connect(mongoKey);

    app.listen(port, () => console.log(`Started at ${port}`));
  } catch (e) {
    console.error(e);
    setTimeout(main, 10000);
  }
}

main();
