import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <Nav.Link as={Link} smooth to="#about" style={{ color: "white" }}>
            About
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#education" style={{ color: "white" }}>
            Education
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#projects" style={{ color: "white" }}>
            Projects
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
