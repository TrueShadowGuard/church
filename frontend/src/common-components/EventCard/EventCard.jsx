import React from 'react';
import classes from "./EventCard.module.css";
import clock from "../../images/home/Clock icon.svg";
import placeImg from "../../images/home/place.svg";
import classNames from "classnames";
import dayjs from "dayjs";
import {NavLink} from "react-router-dom";

const EventCard = ({header, description, date, id, place, ...rest}) => {
  const cardClass = classNames({
    [classes.card]: true,
    [classes.white]: rest.white,
    [rest.className]: rest.className
  });

  const dayjsDate = dayjs(date)

  const dateString = dayjs(dayjsDate).format("dddd HH:mm [UTC]")
  const month = dayjsDate.format("MMMM");
  const day = dayjsDate.format("D");

  const url = "/sermon?id=" + id;

  return (
    <NavLink to={url}>
      <div className={cardClass}>
        <div className={classes.date}>
          <span>{day}</span>
          <br/>
          <span>{month}</span>
        </div>
        <div className={classes.text1}>Upcoming event</div>
        <h5 className={classes.header}>{header}</h5>
        <p className={classes.text2}>{description}</p>
        <div className={classes.day}>
          <img src={clock} alt="clock"/>
          {dateString}
        </div>
        <div className={classes.place}>
          <img src={placeImg} alt=""/>
          {place}
        </div>
      </div>
    </NavLink>
  );
};

export default EventCard;
