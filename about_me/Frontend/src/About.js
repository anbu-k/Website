import React from "react";
import anbuAImage from "./images/AnbuAI.jpg";

import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => (
  <div style={{ padding: "20px" }}>
    <Container>
      <Row className="justify-content-center">
        {" "}
        {/* This centers the columns */}
        <Col xs={12} sm={8} md={6} lg={4}>
          {" "}
          {/* Adjusted for centering and better responsiveness */}
          <Card
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "white",
            }}
          >
            {" "}
            {/* Translucent style */}
            <Card.Img variant="top" src={anbuAImage} alt="Anbu Ai" />
            <Card.Body>
              <Card.Text style={{ color: "white" }}>Your text here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
