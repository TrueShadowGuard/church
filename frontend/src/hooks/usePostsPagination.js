import PostsService from "../network/postsService.js";
import {useEffect, useState, useRef} from "react";

export default function usePostsPagination(options = {}) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPosts, setTotalPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMorePosts();
  }, []);

  return {
    posts,
    haveMorePosts: totalPosts > posts.length,
    getMorePosts,
    loading
  }

  function getMorePosts() {
    const opt = {...options, page: currentPage};
    setLoading(true);
    PostsService
      .getMany(opt)
      .then(response => {
        setTotalPosts(+response.headers["x-total-count"]);
        setPosts([...posts, ...response.data]);
        setCurrentPage(currentPage + 1)
      })
      .finally(() => setLoading(false));
  }
}
