//@ts-check
import { Button } from "react-bootstrap";
import React from "react";
import Nav from "./template/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppLayout from "./components/appLayout";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <div className="App-header">
          <AppLayout />
        </div>
      </div>
    </>
  );
}

export default App;
