import React from 'react';
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import Bg1 from "./components/Bg1/Bg1";
import Subheader from "../../common-components/Subheader/Subheader";
import classes from "./About.module.css";
import img1 from "../../images/common/img1.png";
import img2 from "../../images/common/img2.png";
import img3 from "../../images/common/img3.png";

import bimg1 from "../../images/about/benefits/img1.jpg";
import bimg2 from "../../images/about/benefits/img2.jpg";
import bimg3 from "../../images/about/benefits/img3.jpg";
import bimg4 from "../../images/about/benefits/img4.jpg";
import Benefits from "./components/Benefits/Benefits";
import Container from "../../common-components/Container/Container";
import OurTeam from "./components/OurTeam/OurTeam";

const About = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Bg1/>

                <Subheader className={classes.subheader1}>Welcome to our CHURCH</Subheader>
                <h2 className={classes.header1}>Love and compassion</h2>

                <p className={classes.paragraph1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum.
                </p>
                <div className={classes.images}>
                    <img src={img1} alt=""/>
                    <img src={img2} alt="" className={classes.wideImg}/>
                    <img src={img3} alt=""/>
                </div>
                <div className={classes.container1}>
                    <div className={classes.container1__card}>
                        <Subheader>OUR MISSIOn & Vision</Subheader>
                        <h4>STRIVING FOR A BETTER TOMORROW</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                    <div className={classes.container1__card}>
                        <Subheader>WHAT WE DO</Subheader>
                        <h4>BRINgING PEACE AND JOY TO THE WORLD</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                </div>

                <Subheader className={classes.subheader3}>Benefits</Subheader>
                <h2 className={classes.header3}>THE benefits of joining our church</h2>

                <Benefits />

                <Container maxWidth={"1310px"} className={classes.container2}>
                    <Subheader className={classes.subheader2}>church members</Subheader>
                    <h2 className={classes.header2}>meet our Inspirational team</h2>
                    <OurTeam />
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default About;
