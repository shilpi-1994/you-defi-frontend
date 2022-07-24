import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import useLoginMetamask from "../common/useLoginMetamask";
import ListGroup from "react-bootstrap/ListGroup";
import useLoanDetails from "../common/useLoanDetails";
import useLenderBorrower from "../common/useLenderBorrower";

const BalanceCard = (props) => {
  const signer = useLoginMetamask();
  const { isBorrower } = useLenderBorrower();

  return (
    <Card style={{ color: "black", fontSize: "14px" }}>
      <Card.Body>
        <Card.Title>{props.isSupply ? "You lent" : "Your borrowed"}</Card.Title>
        {isBorrower !== signer ? (
          <Card.Title>Nothing lent yet</Card.Title>
        ) : (
          <ListGroup>
            {props.loanDetails.map((ele, index) => {
              const formattedDate = new Date(Number(ele[6]) * 1000);
              const formattedTime =
                ("0" + formattedDate.getHours()).slice(-2) +
                ":" +
                ("0" + formattedDate.getMinutes()).slice(-2);

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
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default BalanceCard;
