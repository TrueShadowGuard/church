import React from 'react';
import classes from "./Navbar.module.css";
import Container from "../Container/Container";
import {useState, useEffect, useRef} from "react";
import classNames from "classnames";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

const Navbar = () => {

  const [isFixed, setFixed] = useState();

  const ref = useRef();

  useWindowSize();

  const isScreenSmall = window.matchMedia(`(max-width: 550px)`).matches;

  useEffect(() => {
    const onScroll = e => {
      if (window.scrollY > ref.current.clientHeight) setFixed(true);
      else setFixed(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <a className={classes.logo} href="/">Church</a>
            <ul className={classes.ulNav}>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/sermons">Sermon</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
            <a href={"/contact"} className={classes.contact_container}>
              <button className={classes.contact + " nav-btn"}>Contact us</button>
            </a>
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
