import React from 'react';
import classes from "./Navbar.module.css";
import Container from "../Container/Container";
import {useState, useEffect, useRef} from "react";
import classNames from "classnames";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import {NavLink} from "react-router-dom";

const Navbar = () => {

  const [isFixed, setFixed] = useState();

  const ref = useRef();

  useWindowSize();

  useEffect(() => {
    const onScroll = e => {
      if (window.scrollY > ref.current.clientHeight) setFixed(true);
      else setFixed(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScreenSmall = window.matchMedia(`(max-width: 550px)`).matches;
  if(isScreenSmall) return <NavbarMobile />

  const className = classNames({
    [classes.bg]: true,
    [classes.fixed]: isFixed
  });

  const freeSpaceStyle = {
    height: ref?.current?.clientHeight
  }

  return (
    <>
      {isFixed && <div style={freeSpaceStyle}/>}
      <div className={className} ref={ref}>
        <Container>
          <nav className={classes.nav}>
            <NavLink className={classes.logo} to="/">Church</NavLink>
            <ul className={classes.ulNav}>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/sermons">Sermon</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
            <NavLink to={"/contact"} className={classes.contact_container}>
              <button className={classes.contact + " nav-btn"}>Contact us</button>
            </NavLink>
          </nav>
        </Container>
      </div>
    </>
  );
};


export default Navbar;

function useWindowSize() {
  const [size, setSize] = useState({width: 1000, height: 1000});

  useEffect(() => {
    const onResize = () => {
      setSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return size;
}
