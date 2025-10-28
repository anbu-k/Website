import React, { useState, useEffect } from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects"];
      const scrollPosition = window.pageYOffset + 100;

      // Change navbar appearance on scroll
      setScrolled(window.pageYOffset > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBrandClick = () => {
    smoothScrollTo(0);
    setActiveSection("home");
  };

  const handleNavLinkClick = (id) => {
    const yOffset = -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    smoothScrollTo(y);
    setActiveSection(id);
  };

  // Custom smooth scroll function for better performance
  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <BootstrapNavbar className={`navbar-custom ${scrolled ? "scrolled" : ""}`} expand="lg">
      <div className="navbar-brand-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BootstrapNavbar.Brand
            onClick={handleBrandClick}
            className="nav-brand-custom"
          >
            <span className="brand-icon">&lt;</span>
            Anbu Krishnan
            <span className="brand-icon">/&gt;</span>
          </BootstrapNavbar.Brand>
        </motion.div>
      </div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navbar-nav-custom">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Nav.Link
              onClick={() => handleNavLinkClick("about")}
              className={`nav-link-custom ${activeSection === "about" ? "active" : ""}`}
            >
              <span className="nav-number">01.</span> About
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Nav.Link
              onClick={() => handleNavLinkClick("education")}
              className={`nav-link-custom ${activeSection === "education" ? "active" : ""}`}
            >
              <span className="nav-number">02.</span> Education
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Nav.Link
              onClick={() => handleNavLinkClick("projects")}
              className={`nav-link-custom ${activeSection === "projects" ? "active" : ""}`}
            >
              <span className="nav-number">03.</span> Projects
            </Nav.Link>
          </motion.div>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
