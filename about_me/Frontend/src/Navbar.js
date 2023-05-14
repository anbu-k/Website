import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" expand="lg">
      <div style={{ padding: '20px' }}>
      <BootstrapNavbar.Brand href="#home" style={{ color: 'white' }}>
        Anbu Krishnan</BootstrapNavbar.Brand>
        </div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} smooth to="#about" style={{ color: 'white' }}>About</Nav.Link>
          <Nav.Link as={Link} smooth to="#education" style={{ color: 'white' }}>Education</Nav.Link>
          <Nav.Link as={Link} smooth to="#experience" style={{ color: 'white' }}>Experience</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
