import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

const InfluencerPage = () => {
  return (
    <CardGroup>
      <Card style={{ width: "18rem", marginRight: "20px", color: "black" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Influencer 1</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">YouTube</Card.Link>
          <Card.Link href="#">Twitter</Card.Link>
          <Card.Link href="#">Insta</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", marginRight: "20px", color: "black" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3q1NmZqntHGBmmAWtPCb4v6hTqNi8w3ZHg&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Influencer 2</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">YouTube</Card.Link>
          <Card.Link href="#">Twitter</Card.Link>
          <Card.Link href="#">Insta</Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default InfluencerPage;
