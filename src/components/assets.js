import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const AssetsCard = (props) => {
  return (
    <Card style={{ color: "black", fontSize: "14px" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>
          {props.isSupply ? "Assests to lend" : "Assests to borrow"}
        </Card.Title>
        {props.isSupply ? (
          <>
            <ListGroup>
              <ListGroup.Item>
                BUSD
                <Button variant="primary">Lend</Button>
              </ListGroup.Item>
              <ListGroup.Item>DAI</ListGroup.Item>
              <ListGroup.Item>FEI</ListGroup.Item>
              <ListGroup.Item>FRAX</ListGroup.Item>
              <ListGroup.Item>GUSD</ListGroup.Item>
            </ListGroup>
          </>
        ) : (
          <>
            <ListGroup>
              <ListGroup.Item>
                USDC
                <Button variant="primary">Borrow</Button>
              </ListGroup.Item>
              <ListGroup.Item>TUSD</ListGroup.Item>
            </ListGroup>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default AssetsCard;
