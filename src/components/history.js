import React from "react";
import useLoginMetamask from "../common/useLoginMetamask";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BalanceCard from "./borrowCard";
import BorrowedCard from "./borrowedAssets";
import useInitializeEthers from "../common/useInitializeEthers";
import Button from "react-bootstrap/Button";
import LentCard from "./lentCard";
import LentAsset from "./lentAssets";

const History = () => {
  const signer = useLoginMetamask();
  const data = useInitializeEthers();
  const [lender, setLender] = React.useState();
  const [borrower, setBorrower] = React.useState();
  const [numberLoans, setLoans] = React.useState();
  const [loanDetails, setLoanDetails] = React.useState([]);
  const [isBalance, setBalance] = React.useState();

  return (
    <div
      className="page-container home-page"
      style={{ backgroundImage: "unset" }}
    >
      <p>Welcome to YouDefi homepage {signer}</p>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <LentCard
              isSupply={true}
              lender={lender}
              loanDetails={loanDetails}
            />
          </Col>
          <Col xs lg="6">
            <BalanceCard
              isSupply={false}
              borrower={borrower}
              loanDetails={loanDetails}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default History;
