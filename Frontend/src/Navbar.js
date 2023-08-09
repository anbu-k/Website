import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (id) => {
    const yOffset = -70; // height of the navbar (adjust this value according to your actual navbar height)
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <BootstrapNavbar
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "background-color 0.3s",
      }}
      expand="lg"
    >
      <div style={{ padding: "20px" }}>
        <BootstrapNavbar.Brand onClick={handleBrandClick} style={{ color: "white", cursor: "pointer" }}>
          Anbu Krishnan
        </BootstrapNavbar.Brand>
      </div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleNavLinkClick('about')} style={{ color: "white", cursor: "pointer" }}>
            About
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick('education')} style={{ color: "white", cursor: "pointer" }}>
            Education
          </Nav.Link>
          <Nav.Link onClick={() => handleNavLinkClick('projects')} style={{ color: "white", cursor: "pointer" }}>
            Projects
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
