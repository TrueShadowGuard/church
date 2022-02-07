import React from 'react';
import classes from "./OurTeam.module.css";

import img1 from "../../../../images/about/team/img1.jpg";
import img2 from "../../../../images/about/team/img2.jpeg";
import img3 from "../../../../images/about/team/img3.jpg";
import img4 from "../../../../images/about/team/img4.jpg";

import fb from "../../../../images/common/fb_black.svg";
import twitter from "../../../../images/common/twitter_black.svg";
import linkedin from "../../../../images/common/linkedin_black.svg";

const OurTeam = () => {
  return (
    <div className={classes.team}>
      <TeamMember avatar={img1} name={"Kim Bowen"} position={"Pastor, Church"}/>
      <TeamMember avatar={img2} name={"Evangeline Knott"} position={"Pastor, Church"}/>
      <TeamMember avatar={img3} name={"Ariya Philip"} position={"Pastor, Church"}/>
      <TeamMember avatar={img4} name={"Kody Hickman"} position={"Pastor, Church"}/>
    </div>
  );
};

const TeamMember = ({avatar, name, position, links}) => (
  <div className={classes.team_member}>
    <img className={classes.avatar} src={avatar} alt={""} />
    <h5 className={classes.name}>{name}</h5>
    <p className={classes.position}>{position}</p>
    <div className={classes.soc}>
      <a href={links?.fb || "https://facebook.com/"}>
        <img src={fb} alt="facebook"/>
      </a>
      <a href={links?.fb || "http://twitter.com/"}>
        <img src={twitter} alt="twitter"/>
      </a>
      <a href={links?.fb || "https://linkedin.com/"}>
        <img src={linkedin} alt="linkedin"/>
      </a>
    </div>
  </div>
)

export default OurTeam;
