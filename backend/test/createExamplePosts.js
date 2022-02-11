import getNextCounterValue from "../db/utils/getNextCounterValue.js";
import Posts from "../db/models/Posts.js";
import fs from 'fs/promises';
import * as path from "path";

export default async function createExamplePosts(count) {
  const examplesDir = path.join("test", "post_examples");
  let files = await fs.readdir(examplesDir);
  for(let i = 0; i < files.length; i++) {
    const filePath = path.join(examplesDir, files[i]);
    files[i] = JSON.parse(await fs.readFile(filePath, "utf8"));
  }

  for(let i = 0; i < count; i++) {
    const examplePost = files[i % files.length];
    const schema = {...examplePost, id: await getNextCounterValue("posts")};
    await Posts.create(schema);
  }
}
