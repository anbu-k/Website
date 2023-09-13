import React, { useState } from "react";
import "../App.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import cyrateImage from "../images/cyrate3.jpg";
import adkImage from "../images/ADKlogo.jpg";
import { Card, Row, Col } from "react-bootstrap";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const projects = [
    {
      title: "Cyrate",
      description: {
        __html: `
        <strong>Ames City Guide</strong>
        <br />
        Discover the best of Ames with Cyrate's comprehensive features:
        <br />
        <br />
        • Backend powered by Springboot.
        <br />
        • Data storage with MySQL.
        <br />
        • Frontend via Android Studio.
        <br />
        <br />
        <strong>Accounts for Everyone:</strong>
        <br />
        • Choose: Business Owner, Guest, or Regular user.
        <br />
        <br />
        <strong>Details:</strong>
        <br />
        • Restaurant/bar hours and locations (thanks to Google Maps API
        integration).
        <br />
        • Menus just a tap away.
        <br />
        <br />
        <strong>Personalize Your Experience:</strong>
        <br />
        • Mark and revisit your favorite spots.
        <br />
        • Share and track your reviews.
        <br />
        <br />
        <strong>Join the Conversation:</strong>
        <br />
        • Engage in real-time with websockets-powered comment threads.
        <br />
        <br />
        <strong>Command & Control:</strong>
        <br />
        • Full CRUD capabilities for a professional experience.
        <br />
        `,
      },
      image: cyrateImage,
      youtubeLink:
        "https://www.youtube.com/watch?v=w_3M2IuUfWA&list=PL6BdlkdKLEB_pYmF7uwubfK99t4KT4Xoe&index=9",
    },
    {
      title: "ADK Movies",
      description: {
        __html: `
        <strong>Movie Catalog Management System</strong>
        <br />
        Manage your movie collection with ADK Movies' features:
        <br />
        <br />
        • Browse movies in the catalog.
        <br />
        • Add new movies to the collection.
        <br />
        • Update existing movie details.
        <br />
        <br />
        <strong>Frontend:</strong>
        <br />
        • Developed using React.
        <br />
        • Multiple components for diverse pages and forms.
        <br />
        <br />
        <strong>Backend:</strong>
        <br />
        • Built with Node.js, Express, and MongoDB.
        <br />
        • Handles frontend requests and data processing.
        <br />
        <br />
        <strong>Responsive Design:</strong>
        <br />
        • Offers a simple and intuitive user experience.
        <br />
        • Easily manage and engage with your movie catalog.
        <br />
        `,
      },
      image: adkImage,
      youtubeLink: "", // Adjust as necessary
    },
  ];

  const handleNextProject = () => {
    setFading(true);
    setTimeout(() => {
      setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setFading(false);
    }, 500);
  };

  const handlePreviousProject = () => {
    setFading(true);
    setTimeout(() => {
      setProjectIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
      setFading(false);
    }, 500);
  };

  return (
    <div style={{ padding: "80px" }}>
      <Card
        className="text-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "none",
          marginBottom: "20px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
          >
            {" "}
            My Latest Projects
          </Card.Title>
        </Card.Body>
      </Card>

      <Row className="justify-content-center">
        <Col md={4}>
          <div style={{ position: "relative" }}>
            <Card
              className={`text-center ${fading ? "fading" : ""}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "none",
                marginBottom: "20px",
                minHeight: "600px", // Set a minimum height to maintain a consistent card height
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "white", textAlign: "center" }}>
                  {projects[projectIndex].title}
                </Card.Title>
                <div className="card-content">
                  <Card.Img
                    variant="top"
                    src={projects[projectIndex].image}
                    alt={`${projects[projectIndex].title} Project`}
                    style={{ maxWidth: "300px", margin: "0 auto" }}
                  />
                  <Card.Text
                    style={{
                      color: "white",
                      marginTop: "15px",
                      fontSize: "1.2em",
                    }}
                    dangerouslySetInnerHTML={projects[projectIndex].description}
                  />
                </div>
              </Card.Body>

              {projects[projectIndex].youtubeLink && (
                <a
                  href={projects[projectIndex].youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                >
                  <YouTubeIcon style={{ color: "red", fontSize: 30 }} />
                </a>
              )}

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  fontSize: "2em",
                  color: "white",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={handlePreviousProject}
              >
                ‹
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  fontSize: "2em",
                  color: "white",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={handleNextProject}
              >
                ›
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
