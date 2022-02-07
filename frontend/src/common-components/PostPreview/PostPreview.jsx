import React from 'react';
import classes from "./PostPreview.module.css";
import classNames from "classnames";

const PostPreview = ({type, header, description, author, date, postId, ...rest}) => {
  const className = classNames({
    [classes.post]: true,
    [rest.className]: rest.className,
    [classes.white]: rest.white
  });

  const url = "/posts/" + postId;

  return (
    <a href={url}>
      <div className={className}>
        <div className={classes.text1}>{type}</div>
        <h2 className={classes.header} title={header}>{header}</h2>
        <p className={classes.text2}>{description}</p>
        <div className={classes.author}>
          By {author}
        </div>
        <div className={classes.date}>
          Tuesday 13 May, 2021
        </div>
      </div>
    </a>
  );
};

export default PostPreview;
