import React from 'react';
import bg2 from "../../../../images/home/Bg2.png";
import classes from "./BgImage2.module.css"
import Quote from "../../../../images/home/Quote.png";
import {NavLink} from "react-router-dom";

const BgImage2 = () => {
  return (
    <div className={classes.bg} style={{backgroundImage: `url(${bg2})`}}>
      <div className={classes.inner}>
        <div className={classes.col1}>
          <h2>We want to serve the world around us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          <NavLink to="/about">
            <button className="primary">Visit</button>
          </NavLink>
        </div>
        <img className={classes.col2} src={Quote} alt="quote" />
      </div>
    </div>
  );
};

export default BgImage2;
