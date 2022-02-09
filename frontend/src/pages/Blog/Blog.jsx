import React from 'react';
import classes from "./Blog.module.css";
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import PostWithImage, {PostWithImageDummy} from "./components/PostWithImage/PostWithImage";
import Container from "../../common-components/Container/Container";
import Subheader from "../../common-components/Subheader/Subheader";

import PostPreview from "../../common-components/PostPreview/PostPreview";
import usePostsPagination from "../../hooks/usePostsPagination.js";
import Spinner from "../../common-components/Spinner1/Spinner.jsx";
import Spinner2 from "../../common-components/Spinner2/Spinner2.jsx";
import useScrollRestoration from "../../hooks/useScrollRestoration.js";

const Blog = () => {

  // const [posts, setPosts] = useState();
  // useEffect(() => {
  //   PostsService
  //     .getMany({last: true, count: 7})
  //     .then(response => setPosts(response.data))
  // }, []);
  useScrollRestoration();
  const {posts, haveMorePosts, getMorePosts, loading} = usePostsPagination({count: 4, last: true});

  const mostRecentPost = posts ? posts[0] : null;

  return (
    <>
      <Navbar/>
      <main className={classes.main}>
        <Container>
          <Subheader className={classes.subheader1}>OUR BLOG</Subheader>
          <h2 className={classes.header1}>most recent post</h2>

          {!!mostRecentPost && (
            <PostWithImage author={mostRecentPost.author}
                           header={mostRecentPost.header}
                           description={mostRecentPost.description}
                           image={mostRecentPost.image}
                           postId={mostRecentPost._id}
            />
          )}
          {!mostRecentPost && <PostWithImageDummy />}
        </Container>

        <Container maxWidth={"1310px"}>
          <h2 className={classes.header2}>ALL BLOG POSTS</h2>
          <div className={classes.posts}>
            {!!posts && posts.map(post => (
              <PostPreview type={post.type}
                           description={post.description}
                           author={post.author}
                           header={post.header}
                           date={post.date}
                           postId={post._id}
                           key={post._id}
                           white
              />
            ))}
          </div>
          {!loading && haveMorePosts && (
            <button className={`primary ${classes.show_more_button}`}
                    onClick={getMorePosts}
            >
              Show more
            </button>
          )}
          {loading && <Spinner2 />}
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default Blog;
