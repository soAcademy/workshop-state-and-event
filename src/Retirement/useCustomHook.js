import { useState, useEffect } from "react";

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

export const useResult = ({
  ageNow,
  ageEOL,
  ageRet,
  expense,
  inflat,
  invest,
  rate,
}) => {
  const [savingYears, setSavingYears] = useState([]);
  const [resSaving, setResSaving] = useState(0);

  useEffect(() => {
    // console.log(ageNow, ageEOL, ageRet, expense, inflat, invest, rate);

    if (ageEOL >= ageRet && ageRet >= ageNow && ageNow > 0) {
      //financial plan
      const financialPlan = [...Array(ageEOL - ageNow + 1)]
        ?.map((r, idx) => ({
          age: ageNow + idx,
          savPerYr:
            expense * 12 * Math.pow(1 + inflat / 100, ageNow + idx - ageNow),
        }))
        .reduce((acc, r, idx) => {
          // console.log(acc);
          return idx === 0
            ? [
                {
                  age: r.age,
                  savPerYr: r.savPerYr,
                  savPlan: invest * 12 * (1 + rate / 100),
                },
              ]
            : [
                ...acc,
                {
                  age: r.age,
                  savPerYr: r.savPerYr,
                  savPlan:
                    r.age <= ageRet
                      ? (acc[acc.length - 1].savPlan + invest * 12) *
                        (1 + rate / 100)
                      : (acc[acc.length - 1].savPlan - r.savPerYr) *
                        (1 + rate / 100),
                },
              ];
        }, []);
      // console.log(financialPlan);
      setSavingYears(financialPlan);

      const sumRetReq = financialPlan.reduce(
        (acc, r) => (r.age > ageRet ? acc + r.savPerYr : acc),
        0
      );
      // console.log(sumRetReq);
      setResSaving(sumRetReq);
    } else {
      setResSaving(0);
    }
  }, [ageNow, ageEOL, ageRet, expense, inflat, invest, rate]);

  return { savingYears, setSavingYears, resSaving, setResSaving };
};