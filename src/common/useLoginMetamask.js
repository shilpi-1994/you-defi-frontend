import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const useLoginMetamask = () => {
  const [signer, setSigner] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    async function metaMaskLogin() {
      const providerAddress = await provider.send("eth_requestAccounts", []);
      setSigner(providerAddress[0]);
    }
    metaMaskLogin();
  }, []);

  return signer;
};

export default useLoginMetamask;
