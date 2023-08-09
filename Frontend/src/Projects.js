import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import cyrateImage from "./images/cyrate.jpg";

import { Card, Row, Col } from "react-bootstrap";

const Projects = () => (
  <div style={{ padding: "20px" }}>
    <Card
      className="text-center"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "white",
        marginBottom: "20px",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
        >
          Projects
        </Card.Title>
      </Card.Body>
    </Card>

    <Row className="justify-content-center">
      {/* First Project */}
      <Col md={6}>
        <Card
          className="text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "white",
            marginBottom: "20px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: "white", textAlign: "center" }}>
              Cyrate
            </Card.Title>
            <Card.Img
              variant="top"
              src={cyrateImage}
              alt="Cyrate Project"
              style={{ maxWidth: "300px", margin: "0 auto" }} // this ensures a max width and centers the image
            />
            <Card.Text
              style={{ color: "white", marginTop: "15px", fontSize: "1.2em" }}
            >
              <strong> Ames City Guide</strong>
              <br />
              Discover the best of Ames with Cyrate's comprehensive features:
              <br />
              <br />
              • Backend powered by Springboot.
              <br />
              • Data storage with MySQL.
              <br />
              • Frontend brilliance via Android Studio.
              <br />
              <br />
              <strong>Accounts for Everyone:</strong>
              <br />
              • Choose: Owner, Admin, Guest, or Regular user.
              <br />
              <br />
              <strong>Details at Your Fingertips:</strong>
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
              • Full CRUD capabilities for a tailored experience.
              <br />
            </Card.Text>
          </Card.Body>

          {/* YouTube Icon with link */}
          <a 
            href="https://www.youtube.com/watch?v=w_3M2IuUfWA&list=PL6BdlkdKLEB_pYmF7uwubfK99t4KT4Xoe&index=9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
            }}
          >
            <YouTubeIcon style={{ color: 'red', fontSize: 30 }} />
          </a>
        </Card>
      </Col>

      {/* Second Project */}
      <Col md={6}>
        <Card
          className="text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "white",
            marginBottom: "20px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: "white", textAlign: "center" }}>
              ADK Movies
            </Card.Title>
            <Card.Img
              variant="top"
              src="path_to_adk_movies_image.jpg"
              alt="ADK Movies Project"
            />
            <Card.Text style={{ color: "white", marginTop: "15px" }}>
              Description of ADK Movies goes here...
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Projects;
