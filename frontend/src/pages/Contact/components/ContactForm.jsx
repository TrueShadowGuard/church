import React from 'react';
import classes from "./ContactForm.module.css";
import classNames from "classnames";

const ContactForm = props => {
  const formClass = classNames({
    [classes.form]: true,
    [props.className]: props.className
  });

  return (
    <div className={formClass}>
      <div className={classes.text1}>Contact form:</div>
      <input type="text" placeholder={"Your full Name"}/>
      <input type="text" placeholder={"Your Email"}/>
      <input type="text" placeholder={"Query Related"}/>
      <textarea rows="5" placeholder={"Message"}/>
      <button className="primary">Send message</button>
    </div>
  );
};

export default ContactForm;
