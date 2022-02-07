import React from 'react';
import classes from "./Blog.module.css";
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import PostWithImage from "./components/PostWithImage/PostWithImage";
import Container from "../../common-components/Container/Container";
import Subheader from "../../common-components/Subheader/Subheader";

import postImg from "../../images/blog/post_img.png";
import PostPreview from "../../common-components/PostPreview/PostPreview";

const Blog = () => {
  return (
    <>
     <Navbar />
     <main className={classes.main}>
       <Container>
         <Subheader className={classes.subheader1}>OUR BLOG</Subheader>
         <h2 className={classes.header1}>most recent post</h2>

         <PostWithImage author={"John Hunau Deo"}
                        header={"Church was doing what he often did when dropped An oracle "}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."}
                        img={postImg}
                        id={8}
         />
       </Container>

       <Container maxWidth={"1310px"}>
         <h2 className={classes.header2}>ALL BLOG POSTS</h2>
         <div className={classes.posts}>
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        postId={1}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        postId={1}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        postId={1}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        postId={1}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        postId={1}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        white
           />
           <PostPreview type={"Relationship"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
                        author={"Mathew Johnson"}
                        header={"THE BEST WAY TO INSPIRE PEOPLE"}
                        date={new Date()}
                        white
           />
         </div>
       </Container>
     </main>
     <Footer />
    </>
  );
};

export default Blog;
