import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const BalanceCard = (props) => {
  return (
    <Card style={{ color: "black" }}>
      <Card.Body>
        <Card.Title>{props.isSupply ? "You lent" : "Your borrowed"}</Card.Title>
        <Card.Title>Nothing supplied yet</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BalanceCard;
