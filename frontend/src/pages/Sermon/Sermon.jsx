import React from 'react';
import classes from "./Sermon.module.css";
import Container from "../../common-components/Container/Container.jsx";
import Navbar from "../../common-components/Navbar/Navbar.jsx";
import Footer from "../../common-components/Footer/Footer.jsx";
import {useParams} from "react-router";
import {useState, useEffect} from "react";
import EventsService from "../../network/EventsService.js";
import Spinner2 from "../../common-components/Spinner2/Spinner2.jsx";
import clock from "../../images/home/Clock icon.svg";
import placeImg from "../../images/home/place.svg";
import dayjs from "dayjs";

const Sermon = () => {
  const params = useParams();

  const [event, setEvent] = useState();

  useEffect(() => {
    EventsService
      .get({id: params.id})
      .then(response => setEvent(response.data[0]))
  }, [params.id]);

  if(!event) return <Spinner2 />;

  console.log("event", event)

  const time = dayjs(event.date)

  const time1 = time.format("DD MMMM, YYYY")

  return (
    <>
      <Navbar/>
      <main className={classes.main}>
        <Container className={classes.container}>
          <div className={classes.col1}>
            <img src={event.image} alt=""/>
            <div className={classes.text1}>Upcoming Event</div>
            <article className={classes.content} dangerouslySetInnerHTML={{__html: event.content}}/>
          </div>

          <form className={classes.form}>
            <h1 className={classes.header}>Register now</h1>
            <div className={classes.date_and_place}>
              <div className={classes.date}>
                <img src={clock} alt="clock"/>
                {time1}
              </div>
              <div className={classes.place}>
                <img src={placeImg} alt=""/>
                {event.place}
              </div>
            </div>
            <input type="text" placeholder={"Full name"}/>
            <input type="text" placeholder={"Email"}/>
            <button className={classes.register_button + " primary"}>Register now</button>
          </form>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default Sermon;
