import React from "react";
import useLoginMetamask from "./useLoginMetamask";
import useInitializeEthers from "./useInitializeEthers";

const useLoanDetails = () => {
  const signer = useLoginMetamask();
  const data = useInitializeEthers();
  const [loanDetailsObject, setLoanDetails] = React.useState([]);
  const [numberLoans, setLoans] = React.useState();

  React.useEffect(() => {
    loanDetailHandler();
  }, [signer]);

  function loanDetailHandler() {
    getLoanCountNumber().then(async (res) => {
      let loanCard = [];
      for (let i = 1; i <= res; i++) {
        const loans = await data.Loans(i);
        loanCard.push(loans);
        setLoanDetails(loanCard);
      }
    });
  }

  const getLoanCountNumber = async () => {
    const numLoans = await data.numOfLoans();
    setLoans(numLoans.toString());
    return numLoans;
  };

  return loanDetailsObject;
};
export default useLoanDetails;
