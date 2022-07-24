import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useInitializeEthers from "../common/useInitializeEthers";

const BorrowedCard = (props) => {
  const data = useInitializeEthers();
  console.log("props.loanDetails", props.loanDetails);
  return (
    <Card style={{ color: "black", fontSize: "14px" }}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Assets to borrow</Card.Title>
        <ListGroup>
          {props.loanDetails.map((ele, index) => {
            const formattedDate = new Date(Number(ele[6]) * 1000);
            const formattedTime =
              ("0" + formattedDate.getHours()).slice(-2) +
              ":" +
              ("0" + formattedDate.getMinutes()).slice(-2);
            props.setLender(ele[1]);
            props.setBorrower(ele[2]);
            return (
              <ListGroup.Item key={index}>
                <p>Token address: {ele[0]}</p>
                <p>Lender: {ele[1]}</p>
                <p>Loan amount: {Number(ele[3]) / 10 ** 18} DAI</p>
                <p>Loan interest: {Number(ele[4]) / 10 ** 18} DAI</p>
                <p>Collateral (MATIC): {Number(ele[5]) / 10 ** 18} </p>
                <p>
                  Payback within:{formattedDate.toLocaleDateString("en-US")}{" "}
                  {formattedTime}
                </p>
                <Button variant="primary">Borrow</Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default BorrowedCard;
