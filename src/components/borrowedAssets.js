import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useInitializeEthers from "../common/useInitializeEthers";
import useInitializeTokenEthers from "../common/useInitializeTokenEthers";
import useLoanDetails from "../common/useLoanDetails";
import useLenderBorrower from "../common/useLenderBorrower";

const BorrowedCard = (props) => {
  const data = useInitializeEthers();
  const loanDetailsObject = useLoanDetails();
  const tokenData = useInitializeTokenEthers();
  const { isAmount, isLoanId } = useLenderBorrower();

  const approve = async () => {
    const isApprove = await tokenData.approve(
      "0x9947202eeB59B54a3E15E60DB0cCf2F61970bb00",
      isAmount
    );
    await data.takeLoan(isLoanId);
  };

  return (
    <Card style={{ color: "black", fontSize: "14px" }}>
      <Card.Header>Assets to borrow</Card.Header>
      <Card.Body>
        <ListGroup>
          {loanDetailsObject.map((ele, index) => {
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
                <p>Loan amount: {Number(ele[3]) / 10 ** 18} NRT</p>
                <p>Loan interest: {Number(ele[4]) / 10 ** 18} NRT</p>
                <p>Collateral (MATIC): {Number(ele[5]) / 10 ** 18} </p>
                <p>
                  Payback within:{formattedDate.toLocaleDateString("en-US")}{" "}
                  {formattedTime}
                </p>
                <Button variant="secondary" onClick={() => approve()}>
                  Borrow
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default BorrowedCard;
