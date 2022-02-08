import React from 'react';
import classes from "./Sermons.module.css";

import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import Bg1 from "./components/Bg1/Bg1";
import Subheader from "../../common-components/Subheader/Subheader";
import UpcomingEvent from "../../common-components/UpcomingEvent/UpcomingEvent";
import SermonPoster from "../../images/home/SermonPoster.png";
import Container from "../../common-components/Container/Container";
import EventCard from "../../common-components/EventCard/EventCard";
import useScrollRestoration from "../../hooks/useScrollRestoration.js";

const Sermons = () => {
  useScrollRestoration();
  return (
    <>
      <Navbar />
      <main>
        <Bg1 />
        <Container>
          <Subheader className={classes.subheader1}>Upcoming SERMONS</Subheader>
          <h2 className={classes.header1}>join us and become part of something great</h2>
          <UpcomingEvent poster={SermonPoster}
                         date={new Date()}
                         place={{address: "No 233 Main St. New York", city: "United States"}}
                         header={"WATCH AND LISTEN TO OUR SERMONS"}
                         description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
          />
        </Container>

        <Container maxWidth={"1310px"}>
          <h2 className={classes.header2}>View All Events</h2>
          <div className={classes.events}>
            <EventCard date={new Date()}
                       place={{address: "No 233 Main St. New York", city: "United States"}}
                       header={"100 random acts of kindness"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
            />
            <EventCard date={new Date()}
                       place={{address: "No 233 Main St. New York", city: "United States"}}
                       header={"Faith is a process, not a destination"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
            />
            <EventCard date={new Date()}
                       place={{address: "No 233 Main St. New York", city: "United States"}}
                       header={"there is nothing impossible"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
            />
            <EventCard date={new Date()}
                       place={{address: "No 233 Main St. New York", city: "United States"}}
                       header={"WATCH AND LISTEN TO OUR SERMONS"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Sermons;
