// import { useState, useEffect } from "react";

// export const useCostPerYear = () => {
//   const [currentAge, setCurrentAge] = useState("24");
//   const [lifeAge, setLifeAge] = useState("75");
//   const [costPerMonth, setCostPerMonth] = useState("25000");
//   const [inflation, setInflation] = useState("4.27");
//   const [costPerYears, setCostPerYears] = useState([]);

//   const remainingAge = [];
//   for (let i = Number(currentAge); i <= Number(lifeAge); i++) {
//     remainingAge.push(i);
//   }
//   console.log("remainingAge", remainingAge);

//   const costPerYear = costPerMonth * 12;
//   console.log("Cost per year", costPerYear);

//   useEffect(() => {
//     const tmpTotalCostPerYear = remainingAge.map((r, idx) => ({
//       age: r,
//       livingCostPerYear:
//         costPerYear * (1 + Number(inflation) / 100) ** (idx + 1),
//     }));
//     setCostPerYears(tmpTotalCostPerYear);
//     console.log("Total cost per Year", tmpTotalCostPerYear);
//   }, []);
//   return {
//     remainingAge,
//     setCurrentAge,
//     setLifeAge,
//     setCostPerMonth,
//     setInflation,
//     costPerYears,
//   };
// };

//  ยังไม่เสร็จ
