import React from 'react';
import Container from "../Container/Container";
import classes from "./Footer.module.css";

import twitter from "../../images/home/twitter.svg";
import linkedin from "../../images/home/linkedin.svg";
import facebook from "../../images/home/facebook.svg";


const Footer = () => {
  return (
    <div className={classes.bg}>
      <Container>
        <footer className={classes.footer}>

          <div className={classes.col1}>
            <div className={classes.logo}>Church</div>
            <div className={classes.copyright}>© Copyright Finsweet 2022</div>
            <div className={classes.contacts}>
              <div className={classes.phone}>(480) 555-0103</div>
              <div className={classes.street}>4517 Washington Ave. </div>
              <div className={classes.email}>finsweet@example.com</div>
            </div>
          </div>

          <div className={classes.quicklinks}>
            <h1>Quicklinks</h1>
            <a href="/about">About us</a>
            <a href="/sermons">Sermons</a>
            <a href="/events">Events</a>
            <a href="/blog">Blog</a>
          </div>

          <div className={classes.connect}>
            <h1>Connect</h1>
            <div className={classes.soc}>
              <a href="">
                <img alt="twitter" src={twitter} />
              </a>
              <a href="">
                <img alt="facebook" src={facebook} />
              </a>
              <a href="">
                <img alt="linkedin" src={linkedin} />
              </a>
            </div>
          </div>

          <div className={classes.col4}>
            <h1>Subscribe to get Latest Updates and News</h1>
            <div className={classes.subscribe}>
              <div className={classes.subscribeInputContainer}>
                <input type="text" placeholder="Yourmail@gmail.com"/>
              </div>
              <button className={"primary"}>Subscribe</button>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
