import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        {/* <Row className="footer-content">
          <Col md={4} className="footer-col">
            <h3 className="footer-heading">Anbu Krishnan</h3>
            <p className="footer-text">
              QA Automation Engineer passionate about building quality software and creating seamless user experiences.
            </p>
          </Col>

          <Col md={4} className="footer-col">
            <h4 className="footer-subheading">Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className="footer-link"
                  onClick={() => handleLinkClick(link.id)}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </Col>

          <Col md={4} className="footer-col">
            <h4 className="footer-subheading">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Col>
        </Row> */}

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Anbu Krishnan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

