import React from 'react';
import classes from "./NavbarMobile.module.css";


import {useState} from "react";

const arrowUp = "fa fa-angle-up";
const arrowDown = "fa fa-angle-down";

const NavbarMobile = () => {

  const [open, setOpen] = useState();

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>Church</div>
      <button className={classes.menuButton} onClick={() => setOpen(!open)}>
        <div className={classes.menu}>Menu</div>
        <i className={open ? arrowUp : arrowDown} />
      </button>
      {open && (
        <ul className={classes.ulNav}>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/sermon">Sermon</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarMobile;
