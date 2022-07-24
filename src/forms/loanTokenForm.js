import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import React from "react";

const LoanTokenForm = () => {
  return (
    <>
      <Form className="loan-token">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter amount</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter token name</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoanTokenForm;
