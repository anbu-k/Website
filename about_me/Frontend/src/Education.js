import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Education = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    if (activeKey === key) {
      setActiveKey(null); // Close all sections if the current section is clicked again
    } else {
      setActiveKey(key); // Open the clicked section
    }
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h2>Education</h2>
      <h3></h3>
      <Card>
        <Card.Header>
          <Button onClick={() => handleClick('0')}>
            High School
          </Button>
        </Card.Header>
        {activeKey === '0' && (
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
        {activeKey === '1' && (
          <Card.Body>
            <Card.Text style={{ color: 'black' }}>College education details go here.</Card.Text>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default Education;
