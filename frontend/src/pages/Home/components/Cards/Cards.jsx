import React from 'react';
import classes from "./Cards.module.css";
import img2 from "../../../../images/home/Home_card_img2.svg";
import img3 from "../../../../images/home/Home_card_img3.svg";

const Cards = () => {
  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <img className={classes.img} src={img3} alt=""/>
        <h4 className={classes.header}>About us</h4>
        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={classes.card}>
        <img className={classes.img} src={img2} alt=""/>
        <h4 className={classes.header}>Get involved</h4>
        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={classes.card}>
        <img className={classes.img} src={img3} alt=""/>
        <h4 className={classes.header}>Giving back</h4>
        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default Cards;
