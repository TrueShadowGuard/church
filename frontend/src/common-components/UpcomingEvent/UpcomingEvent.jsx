import React from 'react';
import classes from "./UpcomingEvent.module.css";

import clock from "../../images/home/Clock icon.svg";
import placeImg from "../../images/home/place.svg";
import Container from "../Container/Container";

const UpcomingEvent = ({date, place, description, header, poster}) => {

  const date1 = date
    .toLocaleString("en", {month: "long", day: "numeric"})
    .split(" ");

  const month = date1[0];
  const day = date1[1];

  return (
      <div className={classes.event}>
        <div className={classes.col1}>
          <div className={classes.date}>
            <span>{day}</span>
            <br/>
            <span>{month}</span>
          </div>
          <span className={classes.text1}>Upcoming Event</span>
          <h5 className={classes.header}>{header}</h5>
          <p className={classes.description}>{description}</p>
          <div className={classes.day}>
            <img src={clock} alt="clock"/>
            Friday 23:39 UTC
          </div>
          <div className={classes.place}>
            <img src={placeImg} alt=""/>
            {place.address}, <br/>
            {place.city}
          </div>
          <button className={classes.register + " secondary"}>Register</button>
        </div>
        <div className={classes.col2}>
          <img src={poster} alt=""/>
        </div>
      </div>
  );
};

export default UpcomingEvent;
