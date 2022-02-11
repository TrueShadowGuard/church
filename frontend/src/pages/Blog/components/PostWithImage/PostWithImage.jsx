import React from 'react';
import classes from "./PostWithImage.module.css";
import classNames from "classnames";
import Spinner2 from "../../../../common-components/Spinner2/Spinner2.jsx";

const PostWithImage = ({date, image, author, description, header, postId, ...rest}) => {

  const btnClass = classNames("primary", classes.readMore);
  const postClass = classNames({
    [classes.post]: true,
    [rest.className]: rest.className,
  });

  const linkUrl = `/post/${postId}`;

  return (
    <div className={postClass}>
      <img className={classes.img} src={image} alt={""} />
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

export function PostWithImageDummy() {

  const postClassName = classNames(classes.post, classes.post_dummy);

  return (
    <div className={postClassName}>
      <Spinner2 />
    </div>
  )
}

