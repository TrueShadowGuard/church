import axios from "./axios.js";

const PostsService = {};

const basePath = process.env.NODE_ENV === 'dev' ? "http://localhost:4000" : window.location.origin;

PostsService.getOne = async (id) => {
  try {
    const path = basePath + "/posts/" + id;
    return await axios.get(path)
  } catch (e) {
    console.error(e);
  }
};

PostsService.getMany = async (options = {}) => {
  try {
    const path = new URL(basePath + "/posts");
    Object.entries(options).forEach(([key, value]) => path.searchParams.append(key, value));
    return await axios.get(path.toString());
  } catch (e) {
    console.error(e);
  }
}

export default PostsService;
