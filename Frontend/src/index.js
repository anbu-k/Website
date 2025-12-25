import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import './App.css';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="main-container">
      <Router>
        <ScrollProgress />
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
        <Footer />
        <BackToTop />
      </Router>
    </div>
      )}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Resume />);
