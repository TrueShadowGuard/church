import React from 'react';
import classes from "./EventCard.module.css";
import clock from "../../images/home/Clock icon.svg";
import placeImg from "../../images/home/place.svg";
import classNames from "classnames";

const EventCard = props => {
  const cardClass = classNames({
    [classes.card]: true,
    [classes.white]: props.white,
    [props.className]: props.className
  });

  const date1 = props.date
    .toLocaleString("en", {month: "long", day: "numeric"})
    .split(" ");

  const month = date1[0];
  const day = date1[1];

  return (
    <div className={cardClass}>
      <div className={classes.date}>
        <span>{day}</span>
        <br/>
        <span>{month}</span>
      </div>
      <div className={classes.text1}>Upcoming event</div>
      <h5 className={classes.header}>{props.header}</h5>
      <p className={classes.text2}>{props.description}</p>
      <div className={classes.day}>
        <img src={clock} alt="clock"/>
        Friday 23:39 UTC
      </div>
      <div className={classes.place}>
        <img src={placeImg} alt=""/>
        {props.place.address}, <br/>
        {props.place.city}
      </div>
    </div>
  );
};

export default EventCard;
