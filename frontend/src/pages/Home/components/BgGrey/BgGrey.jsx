import React from 'react';
import classes from "./BgGrey.module.css";

import img4 from "../../../../images/home/img4.png";
import img5 from "../../../../images/home/img5.png";
import img6 from "../../../../images/home/img6.png";
import img7 from "../../../../images/home/img7.png";
import Container from "../../../../common-components/Container/Container";


const BgGrey = () => {
  return (
    <div className={classes.bgGrey}>
      <div className={"subheader"}>Watch and listen</div>
      <h2 className={classes.header1}>THE benefits of joining our church</h2>
      <Container>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img src={img4} alt=""/>
            <div className={classes.overlay}/>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className={classes.card}>
            <img src={img5} alt=""/>
            <div className={classes.overlay}/>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className={classes.card}>
            <img src={img6} alt=""/>
            <div className={classes.overlay}/>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className={classes.card}>
            <img src={img7} alt=""/>
            <div className={classes.overlay}/>
            <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BgGrey;
