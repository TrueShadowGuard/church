import React from 'react';
import classes from "./PostPreview.module.css";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";

const PostPreview = ({type, header, description, author, date, postId, ...rest}) => {
  const className = classNames({
    [classes.post]: true,
    [rest.className]: rest.className,
    [classes.white]: rest.white
  });

  const url = "/post?id=" + postId;

  const dayjsDate = dayjs(date);
  const dateString = dayjsDate.format("dddd D MMMM, YYYY")

  return (
    <NavLink to={url}>
      <div className={className}>
        <div className={classes.text1}>{type}</div>
        <h2 className={classes.header} title={header}>{header}</h2>
        <p className={classes.text2}>{description}</p>
        <div className={classes.author}>
          By {author}
        </div>
        <div className={classes.date}>
          {dateString}
        </div>
      </div>
    </NavLink>
  );
};

export default PostPreview;
