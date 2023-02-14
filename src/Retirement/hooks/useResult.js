import { useState, useEffect } from "react";

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