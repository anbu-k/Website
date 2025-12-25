import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Card, Row, Col } from "react-bootstrap";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LinkIcon from "@mui/icons-material/Link";
import SwipeIcon from "@mui/icons-material/SwipeLeft";
import cyrateImage from "../images/cyrate3.jpg";
import adkImage from "../images/ADKlogo.jpg";
import menyImage from "../images/MENY.jpg";
import stockImage from "../images/stock.jpg";
import typqImage from "../images/TypQ.png";
import "../App.css";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const projects = [
    {
      title: "TypQ",
      subtitle: "Minimalistic Typing Test",
      description: [
        "A minimalistic typing test web app built with React and TypeScript",
        "Features include a timer, a typing area, and a results display",
        "The app is styled using Bootstrap and custom CSS",
        "The app is deployed on Vercel"
      ],
      image: typqImage,
      websiteLink: "https://typq.vercel.app",
      githubLink: "https://github.com/anbu-k/TypQ",
      tags: ["React", "TypeScript", "Bootstrap", "CSS"]
    },
    {
      title: "Cyrate",
      subtitle: "Ames City Guide",
      description: [
        "Collaborative Android app developed in Java for Ames, Iowa users and business owners",
        "Features include information sharing, reviews, and live chats about local businesses",
        "Designed and implemented RESTful APIs using Spring Boot",
        "Managed MySQL database for secure and efficient data storage and retrieval",
        "Integrated secure user authentication and role-based authorization"
      ],
      image: cyrateImage,
      youtubeLink: "https://www.youtube.com/watch?v=w_3M2IuUfWA",
      githubLink: "https://github.com/example/cyrate",
      tags: ["Java", "Spring Boot", "MySQL", "Android"]
    },
    {
      title: "ADK Movies",
      subtitle: "Movie Catalog Management System",
      description: [
        "A web application for managing and browsing a personal movie catalog",
        "Users can add, update, and delete movies",
        "Built using React for the frontend and Node.js with MongoDB for the backend",
        "Features a responsive UI for seamless navigation"
      ],
      image: adkImage,
      youtubeLink: "",
      githubLink: "https://github.com/example/adk-movies",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "MENY",
      subtitle: "Mapping Early New York",
      description: [
        "Group project tasked with improving the Mapping Early New York web application",
        "Rewrote an outdated JavaScript/HTML codebase into a fully React and TypeScript-based app",
        "Enhanced maintainability and scalability following industry best practices",
        "Implemented a layer form feature for easy import of Mapbox layers and map data"
      ],
      image: menyImage,
      youtubeLink: "",
      githubLink: "https://github.com/example/meny",
      tags: ["React", "TypeScript", "Mapbox"]
    },
    {
      title: "Stock Market Predictor",
      subtitle: "Stock Market Analysis & Prediction",
      description: [
        "Developed a full-stack stock market web app with real-time stock data, trend analysis, and ML-based price prediction",
        "Designed an interactive Next.js frontend with Plotly charts for stock visualization",
        "Built a Random Forest Regression model to forecast stock prices using technical indicators",
        "Integrated Yahoo Finance API for real-time news and NLP-based sentiment analysis"
      ],
      image: stockImage,
      youtubeLink: "",
      githubLink: "https://github.com/example/stock-predictor",
      tags: ["Next.js", "Machine Learning", "Python"]
    },
  ];

  const changeProject = (newDirection) => {
    setDirection(newDirection);
    setProjectIndex((prevIndex) =>
      newDirection === 1
        ? (prevIndex + 1) % projects.length
        : (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        changeProject(-1);
      } else if (e.key === "ArrowRight") {
        changeProject(1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  // Touch swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      changeProject(1);
    } else if (isRightSwipe) {
      changeProject(-1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div className="section-container">
      <Container>
        {/* Section Header */}
        <Card className="section-header-card">
          <Card.Body>
            <Card.Title className="section-title">My Projects</Card.Title>
            <p className="section-description">
              {projectIndex + 1} of {projects.length}
            </p>
          </Card.Body>
        </Card>

        {/* Project Cards */}
        <Row className="justify-content-center mt-3">
          <Col lg={10} xl={8}>
            <div 
              className="project-carousel"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={projectIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                >
                  <Card className="project-card">
                    <Row className="g-0">
                      <Col md={5}>
                        <div className="project-image-container">
                          <img
                            src={projects[projectIndex].image}
                            alt={projects[projectIndex].title}
                            className="project-image"
                          />
                        </div>
                      </Col>
                      <Col md={7}>
                        <Card.Body className="project-body">
                          <div className="project-header">
                            <div>
                              <Card.Title className="project-title">
                                {projects[projectIndex].title}
                              </Card.Title>
                              <Card.Subtitle className="project-subtitle">
                                {projects[projectIndex].subtitle}
                              </Card.Subtitle>
                            </div>
                            <div className="project-links">
                              {projects[projectIndex].websiteLink && (
                                <a
                                  href={projects[projectIndex].websiteLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-icon"
                                >
                                  <LinkIcon />
                                </a>
                              )}
                              {projects[projectIndex].youtubeLink && (
                                <a
                                  href={projects[projectIndex].youtubeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-icon"
                                >
                                  <YouTubeIcon />
                                </a>
                              )}
                              {projects[projectIndex].githubLink && (
                                <a
                                  href={projects[projectIndex].githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-icon"
                                >
                                  <GitHubIcon />
                                </a>
                              )}
                            </div>
                          </div>

                          <ul className="project-description">
                            {projects[projectIndex].description.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>

                          <div className="project-tags">
                            {projects[projectIndex].tags.map((tag, index) => (
                              <span key={index} className="project-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                className="carousel-button carousel-button-left"
                onClick={() => changeProject(-1)}
                aria-label="Previous project"
              >
                <KeyboardArrowLeftIcon />
              </button>
              <button
                className="carousel-button carousel-button-right"
                onClick={() => changeProject(1)}
                aria-label="Next project"
              >
                <KeyboardArrowRightIcon />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="project-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === projectIndex ? "active" : ""}`}
                  onClick={() => {
                    setDirection(index > projectIndex ? 1 : -1);
                    setProjectIndex(index);
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            {/* Swipe hint for mobile */}
            <div className="swipe-hint">
              <SwipeIcon /> Swipe to browse projects
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
