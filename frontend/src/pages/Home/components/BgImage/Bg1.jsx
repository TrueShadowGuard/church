import React from 'react';
import classes from "./Bg1.module.css";
import bg1 from "../../../../images/home/Home_bg1.jpg";
import Container from "../../../../common-components/Container/Container";

const Bg1 = () => {
  return (
    <div className={classes.bg1} style={{backgroundImage: `url(${bg1})`}}>
      <Container>
        <div className={classes.text1}>Welcome to our CHURCH</div>
        <h1 className={classes.text2}>Become a part of our community</h1>
        <button className={classes.btn + " primary"}>Learn more</button>
        <div className={classes.text3}>
          <span className={classes.line}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </div>
      </Container>
    </div>
  );
};

export default Bg1;
