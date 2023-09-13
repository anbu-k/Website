import React, { useState } from "react";
import { Container, Card, Badge } from "react-bootstrap";
import '../App.css'; // Import the CSS file

const SkillBadge = ({ children, className }) => {
  return (
    <Badge
      pill
      className={`me-2 skill-badge ${className}`} // Use className prop to apply different styles
    >
      {children}
    </Badge>
  );
};

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container style={{ padding: "50px" }}>
      {/* Main Card Block */}
      <Card
        className="text-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "none",
        }}
      >
        {/* Title with Dropdown Arrow */}
        <Card.Body
          onClick={toggleExpand}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          <Card.Title style={{ color: "white", fontSize: "2rem" }}>
            Education <span>{isExpanded ? "↓" : "→"}</span>
          </Card.Title>
        </Card.Body>

        {/* Conditional Rendering */}
        {isExpanded && (
          <>
            {/* High School Card */}
            <Card.Body style={{ borderTop: "1px solid white" }}>
              <Card.Title style={{ color: "white" }}>
                Johnston High School
              </Card.Title>
              <Card.Text style={{ color: "white" }}>2016-2020</Card.Text>
            </Card.Body>

            {/* College Card */}
            <Card.Body style={{ borderTop: "1px solid white" }}>
              <Card.Title style={{ color: "white" }}>
                Iowa State University
              </Card.Title>
              <Card.Text style={{ color: "white" }}>2020-2024</Card.Text>
            </Card.Body>

            {/* Skills Card */}
            <Card.Body style={{ borderTop: "1px solid white" }}>
              <Card.Title style={{ color: "white" }}>Technical Skills</Card.Title>
              <Card.Text style={{ color: "white" }}>
                <SkillBadge className="java-badge">Java</SkillBadge>
                <SkillBadge className="c-badge">C</SkillBadge>
                <SkillBadge className="python-badge">Python</SkillBadge>
                <SkillBadge className="js-badge">Javascript/ReactJS/NodeJs</SkillBadge>
                <SkillBadge className="html-badge">HTML/CSS</SkillBadge>
                <SkillBadge className="spring-badge">Spring Boot</SkillBadge>
                <SkillBadge className="mysql-badge">MySQL</SkillBadge>
                <SkillBadge className="mongo-badge">MongoDB</SkillBadge>
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Education;
