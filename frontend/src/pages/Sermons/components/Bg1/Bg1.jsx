import React from 'react';
import bg1 from "../../../../images/sermons/Bg1.jpg";
import classes from "./Bg1.module.css";
import Container from "../../../../common-components/Container/Container";

const Bg1 = () => {
  return (
    <div style={{backgroundImage: `url(${bg1})`}} className={classes.bg}>
      <Container>
        <div className={classes.text1}>SERMON</div>
        <h2 className={classes.text2}>take part in OUR SERMON</h2>
      </Container>
    </div>
  );
};

export default Bg1;
