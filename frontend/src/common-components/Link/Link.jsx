import React from 'react';
import arrowRight from "../../images/home/arrow-right.svg";
import classes from "./Link.module.css";
import classNames from "classnames";

const Link = (props) => {
  const className = classNames({
    [classes.link]: true,
    [props.className]: props.className
  })

  return (
    <a className={className} href={props.href}>
      <span>{props.text}</span>
      <img src={arrowRight} alt={"arrow to right"} />
    </a>
  );
};

export default Link;
