"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title = "Default Title"}) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <div className="icons">{icon}</div> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;