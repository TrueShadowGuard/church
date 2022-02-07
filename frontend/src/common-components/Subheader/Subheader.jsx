import React from 'react';
import classNames from "classnames";

const Subheader = (props) => {
  const className = classNames({
    "subheader": true,
    [props.className]: props.className
  });

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export default Subheader;
