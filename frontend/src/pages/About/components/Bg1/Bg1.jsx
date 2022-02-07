import React from 'react';
import bg1 from "../../../../images/about/Bg1.jpg";
import classes from "./Bg1.module.css";
import Container from "../../../../common-components/Container/Container";
import Subheader from "../../../../common-components/Subheader/Subheader";

import img1 from "../../../../images/common/img1.png";
import img2 from "../../../../images/common/img2.png";
import img3 from "../../../../images/common/img3.png";

const Bg1 = () => {
  return (
    <div style={{backgroundImage: `url(${bg1})`}} className={classes.bg}>
      <Container>
        <div className={classes.text1}>About us</div>
        <h2 className={classes.text2}>Serving the world around us</h2>
      </Container>
    </div>
  );
};

export default Bg1;
