import { useEffect, useState } from "react";
import { ethers } from "ethers";
import YouDefiArtifact from "../contracts/YouDefi.json";
import ContractAddress from "../contracts/contract-addresss.json";

const useInitializeTokenEthers = () => {
  const [tokenData, setTokenData] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const youDefi = new ethers.Contract(
      ContractAddress.YouDefi,
      YouDefiArtifact.abi,
      provider.getSigner(0)
    );

    setTokenData(youDefi);
  }, []);

  return tokenData;
};

export default useInitializeTokenEthers;
