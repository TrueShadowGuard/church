import React from 'react';
import classes from "./Container.module.css";
import classNames from "classnames";

const Container = props => {

  const style = {
    maxWidth: props.maxWidth || 1280
  }

  const className = classNames({
    [classes.container]: true,
    [props.className]: props.className
  });

  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  );
};

export default Container;
