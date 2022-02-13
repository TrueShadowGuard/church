import React from 'react';
import arrowRight from "../../images/home/arrow-right.svg";
import classes from "./Link.module.css";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Link = (props) => {
  const className = classNames({
    [classes.link]: true,
    [props.className]: props.className
  })

  return (
    <NavLink className={className} to={props.href}>
      <span>{props.text}</span>
      <img src={arrowRight} alt={"arrow to right"} />
    </NavLink>
  );
};

export default Link;
