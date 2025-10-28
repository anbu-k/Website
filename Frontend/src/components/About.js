import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import anbuProfImage from "../images/anbuprof.JPG";
import aquariumImage from "../images/aquar.jpeg";
import blueImage from "../images/blue.JPG";
// import dinnerImage from "../images/dinner.jpg";
import fallsImage from "../images/falls.jpg";
import ferryImage from "../images/ferry.JPG";
import minnyImage from "../images/minny.jpeg";
import spiritImage from "../images/spirit.jpg";
import yosemiteImage from "../images/yosemite.JPG";
import "../App.css";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        changeImage(-1);
      } else if (e.key === "ArrowRight") {
        changeImage(1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating]);

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
      changeImage(1);
    } else if (isRightSwipe) {
      changeImage(-1);
    }
  };

  const images = [
    { src: anbuProfImage},
    { src: aquariumImage},
    { src: blueImage},
    // { src: dinnerImage, alt: "Dinner" },
    { src: fallsImage},
    { src: ferryImage},
    { src: minnyImage},
    { src: spiritImage},
    { src: yosemiteImage}
  ];

  const contactInfo = [
    {
      icon: <PhoneIphoneIcon />,
      text: "515-783-8917",
      link: "tel:515-783-8917"
    },
    {
      icon: <MailOutlineIcon />,
      text: "anbukrishnan52@gmail.com",
      link: "mailto:anbukrishnan52@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/anbu-krishnan-312789227",
      label: "LinkedIn"
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/anbu-k",
      label: "GitHub"
    }
  ];

  const changeImage = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      direction === 1
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    setIsAnimating(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const getCardStyle = (index) => {
    const totalImages = images.length;
    let offset = index - currentImageIndex;
    
    // Wrap around for continuous carousel
    if (offset > totalImages / 2) offset -= totalImages;
    if (offset < -totalImages / 2) offset += totalImages;
    
    // Coverflow-style positioning
    const spacing = 400; // Horizontal spacing between cards
    const translateX = offset * spacing;
    
    // Rotation for 3D effect - side cards angle inward
    let rotateY = 0;
    let translateZ = 0;
    let scale = 1;
    
    if (offset === 0) {
      // Center card - straight on, larger, forward
      rotateY = 0;
      translateZ = 100;
      scale = 1.1;
    } else {
      // Side cards - angle toward center
      rotateY = offset > 0 ? -55 : 55;
      translateZ = -50 - Math.abs(offset) * 30;
      scale = 0.8;
    }
    
    // Opacity based on distance from center
    const absOffset = Math.abs(offset);
    let opacity = 1;
    if (absOffset === 0) opacity = 1;
    else if (absOffset === 1) opacity = 0.8;
    else if (absOffset === 2) opacity = 0.5;
    else opacity = 0;
    
    const zIndex = 10 - absOffset;
    const isVisible = absOffset <= 3;
    
    return {
      x: translateX,
      z: translateZ,
      rotateY: rotateY,
      scale: scale,
      opacity: isVisible ? opacity : 0,
      zIndex: isVisible ? Math.max(zIndex, 0) : -1,
      pointerEvents: offset === 0 ? 'none' : isVisible ? 'auto' : 'none',
      visibility: isVisible ? 'visible' : 'hidden'
    };
  };

  return (
    <div className="about-section">
      <Container>

        {/* Main Content */}
        <Row className="justify-content-center mt-1">
          <Col xs={12}>
            {/* 3D Image Library Carousel - Full Width */}
            <div className="carousel-3d-container-wrapper">
              <div 
                className="carousel-3d-container"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                  <div className="carousel-3d-scene">
                    {images.map((image, index) => {
                      const cardStyle = getCardStyle(index);
                      const offset = index - currentImageIndex;
                      return (
                        <motion.div
                          key={index}
                          className="carousel-3d-card"
                          animate={{
                            x: cardStyle.x,
                            z: cardStyle.z,
                            rotateY: cardStyle.rotateY,
                            scale: cardStyle.scale,
                            opacity: cardStyle.opacity
                          }}
                          transition={{
                            duration: 0.7,
                            ease: [0.4, 0.0, 0.2, 1]
                          }}
                          style={{
                            zIndex: cardStyle.zIndex,
                            pointerEvents: offset === 0 ? 'none' : 'auto',
                            visibility: cardStyle.visibility,
                            cursor: offset === 0 ? 'default' : 'pointer'
                          }}
                          onClick={() => offset !== 0 && goToImage(index)}
                        >
                          <div className="carousel-3d-card-inner">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="carousel-3d-image"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Current Image Info */}
                  <div className="carousel-3d-info">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="carousel-3d-counter">
                        {currentImageIndex + 1} / {images.length}
                      </span>
                      <span className="carousel-3d-title">
                        {images[currentImageIndex].alt}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
          </Col>
        </Row>

        {/* Info Panel - Separate Row */}
        <Row className="justify-content-center mt-4">
          <Col lg={10} xl={8}>
                <Card className="about-info-card">
                  <Card.Body className="about-info-body">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="about-name">Anbu Krishnan</h2>
                      <p className="about-title animated-gradient-text">QA Automation Engineer at Corteva Agriscience</p>
                      
                      <div className="about-divider" />

                      {/* Contact Information */}
                      <div className="about-contact-section">
                        <h3 className="about-section-heading">Contact</h3>
                        <div className="about-contact-list">
                          {contactInfo.map((contact, index) => (
                            <motion.a
                              key={index}
                              href={contact.link}
                              className="about-contact-item"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="about-contact-icon">{contact.icon}</span>
                              <span className="about-contact-text">{contact.text}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      <div className="about-divider" />

                      {/* Social Links */}
                      <div className="about-social-section">
                        <h3 className="about-section-heading">Connect</h3>
                        <div className="about-social-links">
                          {socialLinks.map((social, index) => (
                            <motion.a
                              key={index}
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="about-social-link"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={social.label}
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
