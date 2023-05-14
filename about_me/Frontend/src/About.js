import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
  <div style={{ padding: '20px' }}>
    <h2></h2>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img variant="top" src="http://localhost:5000/images/AnbuAi.jpg" alt="Anbu Ai" />
            <Card.Body>
              <Card.Text style={{ color: 'black' }}>What up.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
