import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Home from "./components/Home";
import BGimage from "./images/BACKGROUND.jpg";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import './App.css'
//import { Component } from "react";

const Resume = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BGimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "110vh",
      }}
    >
      <Router>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        {/* <div id="contact">
          <Contact />
        </div> */}
      </Router>
    </div>
  );
};

ReactDOM.render(<Resume />, document.getElementById("root"));
