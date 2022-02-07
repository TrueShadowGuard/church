const posts = {};

const basePath = process.env.NODE_ENV === 'dev' ? "http://localhost:4000" : window.location.origin;

posts.get = async (id) => {
  try {
    const path = basePath + "/posts/" + id;
    const response = await fetch(path);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export default posts;
