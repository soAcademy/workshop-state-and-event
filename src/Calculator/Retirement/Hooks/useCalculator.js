import React, { useState, useEffect } from "react";

export const useCalculator = (input) => {
  const [result, setResult] = useState([]);

  const sum = (array) => {
    return array.reduce((acc, e) => (acc += e), 0);
  };

  const calculate = (input) => {
    const yearsUntilDie =
      input.deadAge > input.age
        ? [...Array(Number(input.deadAge) + 1 - Number(input.age)).keys()]
        : [];
    const cost = yearsUntilDie.map((e, idx) => {
      const cost = input.cost * 12 * (1 + input.inflation / 100) ** e;
      const age = input.age + e;
      return {
        age: age,
        cost: cost,
      };
    });
    const _result = cost.reduce((acc, result, idx) => {
      return result.age < input.retireAge
        ? [
            ...acc,
            {
              age: result.age,
              cost: result.cost.toFixed(2),
              port: (
                (acc[idx - 1]?.port ?? 0) * (1 + input.percentYield / 100) +
                input.invest * 12
              ).toFixed(2),
            },
          ]
        : [
            ...acc,
            {
              age: result.age,
              cost: result.cost.toFixed(2),
              port:
                (acc[idx - 1]?.port ?? 0) > 0
                  ? (
                      ((acc[idx - 1]?.port ?? 0) - result.cost) *
                      (1 + input.percentYield / 100)
                    ).toFixed(2)
                  : ((acc[idx - 1]?.port ?? 0) - result.cost).toFixed(2),
            },
          ];
    }, []);
    return _result;
  };

  useEffect(() => {
    const _result =
      input.deadAge > input.retireAge
        ? calculate(input)
        : [{ age: 0, cost: 0, port: 0 }];
    setResult(_result);
  }, [input]);
  
  return { result, setResult, sum, calculate };
};
