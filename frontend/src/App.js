import "./common-styles.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Sermons from "./pages/Sermons/Sermons";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import Contact from "./pages/Contact/Contact";
import React, {useEffect} from "react";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/sermons"} element={<Sermons/>}/>
          <Route path={"/blog"} element={<Blog/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"/posts/:id"} element={<Post/>}/>
          <Route path={"/*"} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
