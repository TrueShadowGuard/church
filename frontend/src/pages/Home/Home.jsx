import React from 'react';
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import classes from "./Home.module.css";
import BgImage from "./components/BgImage/Bg1";
import Cards from "./components/Cards/Cards";
import img1 from "../../images/common/img1.png";
import img2 from "../../images/common/img2.png";
import img3 from "../../images/common/img3.png";
import arrowRight from "../../images/home/arrow-right.svg";
import BgGrey from "./components/BgGrey/BgGrey";
import EventWithImage from "../../common-components/EventWithImage/EventWithImage.jsx";

import SermonPoster from "../../images/home/SermonPoster.png"
import Link from "../../common-components/Link/Link";
import Container from "../../common-components/Container/Container";
import BgImage2 from "./components/BgImage2/BgImage2";
import Articles from "./components/Articles/Articles";
import Subheader from "../../common-components/Subheader/Subheader";
import useScrollRestoration from "../../hooks/useScrollRestoration.js";

const Home = () => {
  useScrollRestoration();

  return (
    <div className={classes.home}>
      <Navbar/>
      <main>
        <BgImage/>

        <Container>
          <Subheader className={classes.subheader1}>sub-headline</Subheader>
          <h2 className={classes.header1}>A church that's relevant</h2>
          <Cards/>
        </Container>

        <Subheader className={classes.subheader2}>sub-headline</Subheader>
        <h2 className={classes.header2}>Love and compassion</h2>
        <p className={classes.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <button className={classes.button1 + " primary"}>Read more</button>
        <div className={classes.images}>
          <img className={classes.img1} src={img1} alt=""/>
          <img className={classes.img2} src={img2} alt=""/>
          <img className={classes.img3} src={img3} alt=""/>
        </div>

        <div className={classes.subheader3 + " subheader" }>our mission & vision</div>
        <h4 className={classes.header3}>Celebrate with us</h4>
        <p className={classes.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className={classes.readMore} href="/">
          <span>Read More</span>
          <img src={arrowRight} alt={"arrow to right"} />
        </a>

        <BgGrey/>

        <Container>
          <Subheader className={classes.subheader4}>Upcoming SERMONS</Subheader>
          <h2 className={classes.header4}>join us and become part of something great</h2>
          <EventWithImage poster={SermonPoster}
                          date={new Date()}
                          place={"No 233 Main St.\n New York"}
                          header={"WATCH AND LISTEN TO OUR SERMONS"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
          />
        </Container>

        <Container>
          <Link className={classes.link1} href={"/"} text={"View all Sermons"} />
        </Container>

        <BgImage2 />

        <Container>
          <Subheader className={classes.subheader5}>Read our Blog</Subheader>
          <h2 className={classes.header5}>SHARE, INSPIRE, INNOVATE</h2>
          <Articles className={classes.articles}/>
        </Container>
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
