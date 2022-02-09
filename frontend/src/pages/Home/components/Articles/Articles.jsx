import React from 'react';
import classes from "./Articles.module.css";
import classNames from "classnames";
import PostPreview from "../../../../common-components/PostPreview/PostPreview";
import {useState, useEffect} from "react";
import PostsService from "../../../../network/PostsService.js";

const Articles = (props) => {
  const articlesClassName = classNames({
    [classes.articles]: true,
    [props.className]: props.className
  });

  const [posts, setPosts] = useState();
  useEffect(() => {
    PostsService
      .get({last: true, count: 4})
      .then(response => setPosts(response.data))
  }, []);

  return (
    <div className={articlesClassName}>
      {!!posts && posts.map(post => (
        <PostPreview author={post.author}
                     type={post.type}
                     header={post.header}
                     description={post.description}
                     date={post.date}
                     postId={post._id}
        />
      ))}
    </div>
  );
};

export default Articles;
