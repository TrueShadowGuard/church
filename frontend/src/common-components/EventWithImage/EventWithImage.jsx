import React from 'react';
import classes from "./EventWithImage.module.css";

import clock from "../../images/home/Clock icon.svg";
import placeImg from "../../images/home/place.svg";
import Container from "../Container/Container";
import dayjs from "dayjs";
import {NavLink} from "react-router-dom";

const EventWithImage = ({date, place, description, header, poster, id}) => {

  const date1 = dayjs(date)

  const time = dayjs(date).format("dddd HH:mm [UTC]")

  const month = date1.format("MMMM");
  const day = date1.format("D");

  const url = "/sermon?id=" + id;

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
          {time}
        </div>
        <div className={classes.place}>
          <img src={placeImg} alt=""/>
          {place}
        </div>
        <NavLink to={url}>
          <button className={classes.register + " secondary"}>Register</button>
        </NavLink>
      </div>
      <div className={classes.col2}>
        <img src={poster} alt=""/>
      </div>
    </div>
  );
};

export default EventWithImage;
