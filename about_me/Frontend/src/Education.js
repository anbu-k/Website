import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Education = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  const handleClick = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter(k => k !== key)); // Remove key from active keys
    } else {
      setActiveKeys([...activeKeys, key]); // Add key to active keys
    }
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h2>Education</h2>
      <Card>
        <Card.Header>
          <Button onClick={() => handleClick('0')}>
            High School
          </Button>
        </Card.Header>
        {activeKeys.includes('0') && (
          <Card.Body>
            <Card.Text style={{ color: 'black' }}>High school education details go here.</Card.Text>
          </Card.Body>
        )}
      </Card>
      <Card>
        <Card.Header>
          <Button onClick={() => handleClick('1')}>
            College
          </Button>
        </Card.Header>
        {activeKeys.includes('1') && (
          <Card.Body>
            <Card.Text style={{ color: 'black' }}>College education details go here.</Card.Text>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default Education;
