import React from 'react';
import classes from "./PostWithImage.module.css";
import classNames from "classnames";

const PostWithImage = ({date, img, author, description, header, postId, ...rest}) => {

  const btnClass = classNames("primary", classes.readMore);
  const postClass = classNames({
    [classes.post]: true,
    [rest.className]: rest.className,
  });

  const linkUrl = `/posts/${postId}`;

  return (
    <div className={postClass}>
      <img className={classes.img} src={img} alt={""} />
      <div className={classes.text}>
        <div className={classes.date_and_author}>
          <span className={classes.date}>Tuesday 13 May, 2022</span>
          <span className={classes.author}>by {author}</span>
        </div>
        <h4 className={classes.header}>{header}</h4>
        <p>{description}</p>
        <a href={linkUrl}>
          <button className={btnClass}>Read more</button>
        </a>
      </div>
    </div>
  );
};

export default PostWithImage;
