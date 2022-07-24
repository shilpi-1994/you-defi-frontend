import React from "react";
import useInitializeEthers from "../common/useInitializeEthers";
import useLoginMetamask from "../common/useLoginMetamask";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import "./component.css";

const AppLandingPage = () => {
  const navigate = useNavigate();
  const signer = useLoginMetamask();
  useInitializeEthers();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  function loginHandler() {
    metaMaskLogin().then(() => {
      navigate("/home");
    });
  }

  const metaMaskLogin = async () => {
    await provider.send("eth_requestAccounts", []);
  };

  return (
    <div className="page-container login-button">
      <p>Welcome to YouDefi</p>
      <button
        type="button"
        className="btn btn-light"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={() => loginHandler()}
      >
        Login through Metamask
      </button>
      <h3>Presented by: Arjun Dev & Shilpi Sinha</h3>
    </div>
  );
};

export default AppLandingPage;
