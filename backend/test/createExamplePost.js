import getNextCounterValue from "../db/utils/getNextCounterValue.js";
import Posts from "../db/models/Posts.js";
import { readFile } from 'fs/promises';

const examplePost = JSON.parse(
  await readFile("./test/post_example.json", "utf8")
);

export default async function createExamplePost() {
  const schema = {...examplePost, _id: await getNextCounterValue("posts")};
  await Posts.create(schema);
}
