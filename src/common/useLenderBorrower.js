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
  const [isAmount, setIsAmount] = React.useState();
  const [isLoanId, setIsLoanId] = React.useState();

  React.useEffect(() => {
    getLender();
    getBorrower();
    getAmount();
    getLoanID();
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

  const getAmount = () => {
    const amountValue = loanDetailsObject
      .map((ele) => Number(ele[3]))
      .join("")
      .toString()
      .toLowerCase();
    setIsAmount(amountValue);
  };

  const getLoanID = () => {
    const loanId = loanDetailsObject
      .map((ele, index) => Number(index))
      .join("")
      .toString()
      .toLowerCase();
    setIsLoanId(loanId);
  };

  return { isLender, isBorrower, isAmount, isLoanId };
};

export default useLenderBorrower;
