import React, { useState, useEffect } from "react";
import { sum } from "./sum";
import { checkResult } from "./checkResult";

export const useResult = ({ queryNumbers, prizes, checkClicked }) => {
  const [result, setResult] = useState([]);
  const [sumResult, setSumResult] = useState();
  useEffect(() => {
    const _result = checkResult({ queryNumbers, prizes });
    const sumResult = sum(_result?.map((e) => e.prize));
    setSumResult(sumResult);
    setResult(_result);
  }, [checkClicked]);
  return { result, sumResult, setResult, setSumResult };
};
