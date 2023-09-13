import React from "react";
import "../App.css";
import anbuAImage from "../images/AnbuAI.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";



const About = () => (
  <div style={{ padding: "20px" }}>
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <Card className="glowingCard"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "none",
              perspective: "1000px",
              // transition: "transform 0.3s, box-shadow 0.5s", // Increased transition time for the box-shadow for a smoother glow effect
              // boxShadow:
              //   "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23), 0 0 0 4px rgba(255, 255, 255, 0.6)", // Increased the glow's alpha value
              // transformStyle: "preserve-3d",
              "&:hover": {
                transform: "rotateX(10deg) rotateY(10deg)",
                boxShadow:
                  "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22), 0 0 0 6px rgba(255, 255, 255, 0.8)", // Intensified the glow on hover
              },
            }}
          >
            <Card.Img variant="top" src={anbuAImage} alt="Anbu Ai" />
            <Card.Body>
              <Card.Title
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Anbu Krishnan
              </Card.Title>
              <Card.Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Computer Science
              </Card.Text>

              <Row style={{ alignItems: "center" }}>
                <Col
                  xs={5}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <PhoneIphoneIcon
                      style={{ color: "white", marginRight: "10px" }}
                    />
                    515-783-8917
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon
                      style={{ color: "white", marginRight: "10px" }}
                    />
                    anbukrishnan52@gmail.com
                  </div>
                </Col>
                <Col
                  xs={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "1px",
                      backgroundColor: "white",
                      height: "50%",
                      alignSelf: "center",
                    }}
                  ></div>
                </Col>
                <Col
                  xs={6}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/anbu-krishnan-312789227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-hover"
                  >
                    <LinkedInIcon
                      style={{ color: "white", marginBottom: "10px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/anbu-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-hover"
                  >
                    <GitHubIcon style={{ color: "white" }} />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
