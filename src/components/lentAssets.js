import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useInitializeEthers from "../common/useInitializeEthers";

const LentAsset = (props) => {
  const data = useInitializeEthers();

  return (
    <Card style={{ color: "black", fontSize: "14px" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Assests to lend</Card.Title>
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
      </Card.Body>
    </Card>
  );
};

export default LentAsset;
