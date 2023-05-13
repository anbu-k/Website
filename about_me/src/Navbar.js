import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>Anbu Krishnan</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/education">
          <Nav.Link>Education</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/experience">
          <Nav.Link>Experience</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
