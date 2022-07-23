import React from "react";
import useLoginMetamask from "../common/useLoginMetamask";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BalanceCard from "./card";
import AssetsCard from "./assets";

const HomePage = () => {
  const signer = useLoginMetamask();

  return (
    <div
      className="page-container home-page"
      style={{ backgroundImage: "unset" }}
    >
      <p>Welcome to Ledger homepage {signer}</p>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <BalanceCard isSupply={true} />
          </Col>
          <Col xs lg="6">
            <BalanceCard isSupply={false} />
          </Col>
        </Row>
        <Row></Row>
        <br />
        <Row>
          <Col xs lg="6">
            <AssetsCard isSupply={true} />
          </Col>
          <Col xs lg="6">
            <AssetsCard isSupply={false} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
