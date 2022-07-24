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
import useLoanDetails from "../common/useLoanDetails";

const HomePage = () => {
  const signer = useLoginMetamask();
  const data = useInitializeEthers();
  const loanDetailsObject = useLoanDetails();
  const [lender, setLender] = React.useState();
  const [borrower, setBorrower] = React.useState();
  const [loanDetails, setLoanDetails] = React.useState([]);

  return (
    <div
      className="page-container home-page"
      style={{ backgroundImage: "unset" }}
    >
      <p>
        Welcome to Ledger homepage <span>{signer}</span>
      </p>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <LentCard
              isSupply={true}
              lender={lender}
              loanDetails={loanDetailsObject}
            />
          </Col>
          <Col xs lg="6">
            <BalanceCard
              isSupply={false}
              borrower={borrower}
              loanDetails={loanDetailsObject}
            />
          </Col>
        </Row>
        <Row></Row>
        <br />
        <Row>
          <Col xs lg="6">
            <LentAsset />
          </Col>
          <Col xs lg="6">
            <BorrowedCard
              isSupply={false}
              loanDetails={loanDetailsObject}
              setLender={setLender}
              setBorrower={setBorrower}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
