import React from "react";
import { Card } from "react-bootstrap";

const Experience = () => (
  <div style={{ padding: "20px" }}>
    <Card
      className="text-center"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "white",
      }}
    >
      <Card.Body>
        <Card.Title style={{ color: "white", fontSize: "2rem" }}>
          Projects
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
);

export default Experience;
