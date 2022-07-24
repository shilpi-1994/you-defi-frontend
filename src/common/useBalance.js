import React from "react";
import useLoginMetamask from "./useLoginMetamask";
import useInitializeTokenEthers from "./useInitializeTokenEthers";

const useBalance = () => {
  const signer = useLoginMetamask();
  const data = useInitializeTokenEthers();
  const [balanceAmount, setBalance] = React.useState();

  React.useEffect(() => {
    metaMaskBalance();
  }, [signer]);

  const metaMaskBalance = async () => {
    const balanceOf = await data.balanceOf(signer);
    setBalance(Number(balanceOf / 10 ** 18));
    return balanceOf;
  };

  return balanceAmount;
};

export default useBalance;
