import React from 'react';
import classes from "./Benefits.module.css";

import bimg1 from "../../../../images/about/benefits/img1.jpg";
import bimg2 from "../../../../images/about/benefits/img2.jpg";
import bimg3 from "../../../../images/about/benefits/img3.jpg";
import bimg4 from "../../../../images/about/benefits/img4.jpg";

const Benefits = () => {
  return (
    <div className={classes.benefits}>
      <div className={classes.benefit}>
        <img className={classes.benefit__img} src={bimg1} alt=""/>
        <div className={classes.benefit__text}>
          <h4>find fulfillment and joy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
      <div className={classes.benefit}>
        <img className={classes.benefit__img} src={bimg2} alt=""/>
        <div className={classes.benefit__text}>
          <h4>shared values</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
      <div className={classes.benefit}>
        <img className={classes.benefit__img} src={bimg3} alt=""/>
        <div className={classes.benefit__text}>
          <h4>charity events</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
      <div className={classes.benefit}>
        <img className={classes.benefit__img} src={bimg4} alt=""/>
        <div className={classes.benefit__text}>
          <h4>All are welcome</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
