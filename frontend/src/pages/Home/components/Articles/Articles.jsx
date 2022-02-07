import React from 'react';
import classes from "./Articles.module.css";
import classNames from "classnames";
import PostPreview from "../../../../common-components/PostPreview/PostPreview";

const Articles = (props) => {
  const articlesClassName = classNames({
    [classes.articles]: true,
    [props.className]: props.className
  });

  return (
    <div className={articlesClassName}>
      <PostPreview author={"Mathew Johnson"}
                   type={"Relationship"}
                   header={"WATCH AND LISTEN TO OUR SERMONS"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                   date={new Date()}
      />
      <PostPreview author={"Mathew Johnson"}
                   type={"Relationship"}
                   header={"WATCH AND LISTEN TO OUR SERMONS"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                   date={new Date()}
      />
      <PostPreview author={"Mathew Johnson"}
                   type={"Relationship"}
                   header={"WATCH AND LISTEN TO OUR SERMONS"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                   date={new Date()}
      />
      <PostPreview author={"Mathew Johnson"}
                   type={"Relationship"}
                   header={"WATCH AND LISTEN TO OUR SERMONS"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
                   date={new Date()}
      />
    </div>
  );
};

export default Articles;
