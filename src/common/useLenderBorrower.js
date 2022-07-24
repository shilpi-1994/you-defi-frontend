import React from "react";
import useLoginMetamask from "./useLoginMetamask";
import useInitializeEthers from "./useInitializeEthers";
import useLoanDetails from "./useLoanDetails";

const useLenderBorrower = () => {
  const signer = useLoginMetamask();
  const data = useInitializeEthers();
  const loanDetailsObject = useLoanDetails();

  const [isLender, setIsLender] = React.useState();
  const [isBorrower, setIsBorrower] = React.useState();

  React.useEffect(() => {
    getLender();
    getBorrower();
  }, [signer, loanDetailsObject]);

  const getLender = () => {
    const lenderAddr = loanDetailsObject
      .map((ele) => ele[1])
      .join("")
      .toString()
      .toLowerCase();
    setIsLender(lenderAddr);
  };

  const getBorrower = () => {
    const borrowerAddr = loanDetailsObject
      .map((ele) => ele[2])
      .join("")
      .toString()
      .toLowerCase();
    setIsBorrower(borrowerAddr);
  };

  return { isLender, isBorrower };
};

export default useLenderBorrower;
