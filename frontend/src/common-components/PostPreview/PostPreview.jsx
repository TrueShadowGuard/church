import React from 'react';
import classes from "./PostPreview.module.css";
import classNames from "classnames";

const PostPreview = ({type, header, description, author, date, ...rest}) => {
  const className = classNames({
    [classes.post]: true,
    [rest.className]: rest.className,
    [classes.white]: rest.white
  });

  return (
    <div className={className}>
      <div className={classes.text1}>{type}</div>
      <h5 className={classes.header}>{header}</h5>
      <p className={classes.text2}>{description}</p>
      <div className={classes.author}>
        By {author}
      </div>
      <div className={classes.date}>
        Tuesday 13 May, 2021
      </div>
    </div>
  );
};

export default PostPreview;
