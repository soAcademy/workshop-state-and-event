import { useState } from "react";

export const useInputVal = () => {
  const [ageNow, setAgeNow] = useState(30);
  const [ageEOL, setAgeEOL] = useState(75);
  const [ageRet, setAgeRet] = useState(60);
  const [expense, setExpense] = useState(30000);
  const [inflat, setInflat] = useState(4.72);
  const [invest, setInvest] = useState(10000);
  const [rate, setRate] = useState(7.0);

  return {
    ageNow,
    setAgeNow,
    ageEOL,
    setAgeEOL,
    ageRet,
    setAgeRet,
    expense,
    setExpense,
    inflat,
    setInflat,
    invest,
    setInvest,
    rate,
    setRate,
  };
};
