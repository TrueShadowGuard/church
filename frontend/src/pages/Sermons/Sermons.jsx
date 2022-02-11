import React from 'react';
import classes from "./Sermons.module.css";

import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import Bg1 from "./components/Bg1/Bg1";
import Subheader from "../../common-components/Subheader/Subheader";
import EventWithImage from "../../common-components/EventWithImage/EventWithImage.jsx";
import SermonPoster from "../../images/home/SermonPoster.png";
import Container from "../../common-components/Container/Container";
import EventCard from "../../common-components/EventCard/EventCard";
import useScrollRestoration from "../../hooks/useScrollRestoration.js";
import {useState, useEffect} from "react";
import EventsService from "../../network/EventsService.js";

const Sermons = () => {

  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    EventsService
      .get({count: 4})
      .then(response => setUpcomingEvents(response.data));
  }, []);

  const mostUpcomingEvent = upcomingEvents[0];

  useScrollRestoration();
  return (
    <>
      <Navbar/>
      <main>
        <Bg1/>
        <Container>
          <Subheader className={classes.subheader1}>Upcoming SERMONS</Subheader>
          <h2 className={classes.header1}>join us and become part of something great</h2>
          {mostUpcomingEvent && (
            <EventWithImage poster={mostUpcomingEvent.image}
                            id={mostUpcomingEvent.id}
                            date={mostUpcomingEvent.date}
                            place={mostUpcomingEvent.place}
                            header={mostUpcomingEvent.header}
                            description={mostUpcomingEvent.description}
            />
          )}
        </Container>

        <Container maxWidth={"1310px"}>
          <h2 className={classes.header2}>View All Events</h2>
          <div className={classes.events}>
            {upcomingEvents.map(event => (
              <EventCard date={event.date}
                         place={event.place}
                         header={event.header}
                         id={event.id}
                         description={event.description}
                         key={event.id}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default Sermons;
