import React, { useState } from "react";
import { Container, Card, Badge, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import azureCert from "../images/MC_Azure_cert.jpg";
import '../App.css';

const SkillBadge = ({ children, className }) => {
  return (
    <Badge
      pill
      className={`skill-badge ${className}`}
    >
      {children}
    </Badge>
  );
};

const EducationItem = ({ title, subtitle, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, delay }}
  >
    <Card className="education-card">
      <Card.Body>
        <Card.Title className="section-subtitle">{title}</Card.Title>
        {subtitle && <Card.Text className="section-text">{subtitle}</Card.Text>}
        {children}
      </Card.Body>
    </Card>
  </motion.div>
);

const Education = () => {
  const [activeSection, setActiveSection] = useState("all");

  const sections = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certs", label: "Certs" }
  ];

  const skills = [
    { name: "Java", className: "java-badge", level: "Advanced" },
    { name: "C", className: "c-badge", level: "Intermediate" },
    { name: "Python", className: "python-badge", level: "Advanced" },
    { name: "Javascript/ReactJS/NodeJs", className: "js-badge", level: "Advanced" },
    { name: "HTML/CSS", className: "html-badge", level: "Advanced" },
    { name: "Spring Boot", className: "spring-badge", level: "Intermediate" },
    { name: "MySQL", className: "mysql-badge", level: "Advanced" },
    { name: "MongoDB", className: "mongo-badge", level: "Intermediate" }
  ];

  const certifications = [
    { name: "AZ-900: Microsoft Azure Fundamentals", image: azureCert },
  ];

  return (
    <div className="section-container">
      <Container>
        {/* Section Header */}
        <Card className="section-header-card">
          <Card.Body>
            <Card.Title className="section-title">Education & Skills</Card.Title>
            
            {/* Filter Tabs */}
            <div className="filter-tabs">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`filter-tab ${activeSection === section.id ? "active" : ""}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </Card.Body>
        </Card>

        {/* Content Cards */}
        <Row className="g-5 mt-3 education-content-row">
          <AnimatePresence mode="sync">
            {(activeSection === "all" || activeSection === "education") && (
              <>
                <Col md={6}>
                  <EducationItem 
                    title="Johnston High School" 
                    subtitle="2016-2020"
                    delay={0}
                  />
                </Col>
                <Col md={6}>
                  <EducationItem 
                    title="Iowa State University" 
                    subtitle="B.S. Computer Science, 2020-2024"
                    delay={0.1}
                  />
                </Col>
              </>
            )}
            
            {(activeSection === "all" || activeSection === "skills") && (
              <Col xs={12}>
                <EducationItem 
                  title="Technical Skills" 
                  delay={activeSection === "skills" ? 0 : 0.2}
                >
                  <div className="skills-container">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="skill-badge-wrapper"
                        title={`${skill.name} - ${skill.level}`}
                      >
                        <SkillBadge className={skill.className}>
                          {skill.name}
                        </SkillBadge>
                        <span className="skill-tooltip">{skill.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </EducationItem>
              </Col>
            )}

            {(activeSection === "all" || activeSection === "certs") && (
              <Col xs={12} className="d-flex justify-content-center">
                <EducationItem 
                  title="Certifications" 
                  delay={activeSection === "certs" ? 0 : 0.3}
                >
                  {certifications.length > 0 ? (
                    <div className="certs-container">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.name}
                          className="cert-card"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className="cert-image"
                          />
                          <div className="cert-overlay">
                            <p className="cert-name">{cert.name}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="section-text" style={{ opacity: 0.7, fontStyle: 'italic' }}>
                      Add your certifications to the certifications array in Education.js
                    </p>
                  )}
                </EducationItem>
              </Col>
            )}
          </AnimatePresence>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
