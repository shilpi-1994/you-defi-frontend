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

const HomePage = () => {
  const signer = useLoginMetamask();
  const data = useInitializeEthers();
  const [lender, setLender] = React.useState();
  const [borrower, setBorrower] = React.useState();
  const [numberLoans, setLoans] = React.useState();
  const [loanDetails, setLoanDetails] = React.useState([]);

  console.log("numberLoans", numberLoans, lender);

  const numOfLoans = async () => {
    const numLoans = await data.numOfLoans();
    setLoans(numLoans);
    console.log(numLoans.toString());
  };

  const loanDetailCard = async () => {
    let loanCard = [];
    const getLoanCount = Number(await data.numOfLoans());
    setLoans(getLoanCount);
    for (let i = 1; i <= getLoanCount; i++) {
      const loans = await data.Loans(i);
      loanCard.push(loans);
      setLoanDetails(loanCard);
    }
  };

  console.log("loanDetails", loanDetails);

  return (
    <div
      className="page-container home-page"
      style={{ backgroundImage: "unset" }}
    >
      <p>Welcome to Ledger homepage {signer}</p>
      <Button variant="primary" onClick={() => loanDetailCard()}>
        Get borrower detailss
      </Button>
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
        <Row></Row>
        <br />
        <Row>
          <Col xs lg="6">
            <LentAsset />
          </Col>
          <Col xs lg="6">
            <BorrowedCard
              isSupply={false}
              loanDetails={loanDetails}
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
