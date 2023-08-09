import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "./App.css";

const Navbar = () => {
  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (id) => {
    const yOffset = -70; // height of the navbar (adjust this value according to your actual navbar height)
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <BootstrapNavbar className="navbar-custom" expand="lg">
      <div style={{ padding: "20px" }}>
        <BootstrapNavbar.Brand
          onClick={handleBrandClick}
          className="nav-link-custom"
        >
          Anbu Krishnan
        </BootstrapNavbar.Brand>
      </div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => handleNavLinkClick("about")}
            className="nav-link-custom"
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick("education")}
            className="nav-link-custom"
          >
            Education
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick("projects")}
            className="nav-link-custom"
          >
            Projects
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
