import React from 'react';
import Navbar from "../../common-components/Navbar/Navbar";
import Footer from "../../common-components/Footer/Footer";
import classes from "./Contact.module.css";
import bg1 from "../../images/contact/bg1.jpg";
import ContactForm from "./components/ContactForm";
import Container from "../../common-components/Container/Container";
import fb from "../../images/common/fb_black.svg";
import twitter from "../../images/common/twitter_black.svg";
import linkedin from "../../images/common/linkedin_black.svg";
import useScrollRestoration from "../../hooks/useScrollRestoration.js";

const Contact = () => {
  useScrollRestoration();
  return (
    <>
      <Navbar />
      <main className={classes.contact}>
        <div className={classes.bg1} style={{backgroundImage: `url(${bg1})`}}>
          <span className={classes.text1}>Contact</span>
          <h2 className={classes.text2}>Get in touch with our CHURCH</h2>
        </div>
        <Container className={classes.form_container}>
          <ContactForm />
          <div className={classes.contacts}>
            <div className={classes.contact_item}>
              <div className={classes.key}>Address</div>
              <div className={classes.value}>NH 234   Public Square <br/> San Francisco  65368</div>
            </div>
            <div className={classes.contact_item}>
              <div className={classes.key}>Contact Details</div>
              <div className={classes.value}>(480) 555-0103</div>
              <div className={classes.value}>finsweet@example.com</div>
            </div>
            <div className={classes.soc_container}>
              <div className={classes.findUsHere}>Find us here</div>
              <div className={classes.soc}>
                <a href={"https://facebook.com/"}>
                  <img src={fb} alt="facebook"/>
                </a>
                <a href={"http://twitter.com/"}>
                  <img src={twitter} alt="twitter"/>
                </a>
                <a href={"https://linkedin.com/"}>
                  <img src={linkedin} alt="linkedin"/>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
