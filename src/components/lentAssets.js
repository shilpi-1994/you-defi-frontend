import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useInitializeTokenEthers from "../common/useInitializeTokenEthers";
import useLoginMetamask from "../common/useLoginMetamask";
import { ethers } from "ethers";
import useBalance from "../common/useBalance";

const LentAsset = (props) => {
  const data = useInitializeTokenEthers();
  const signer = useLoginMetamask();
  const finalBal = useBalance();

  return (
    <>
      <Card style={{ color: "black", fontSize: "14px" }}>
        <Card.Header>Assests to lend</Card.Header>
        <Card.Body>
          <Card.Title>
            <span>Balance:</span>
            <span>{finalBal} NRT</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default LentAsset;
