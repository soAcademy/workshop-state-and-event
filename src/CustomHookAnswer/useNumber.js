import React, { useState } from "react";

export const useNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return {
    number1,
    setNumber1,
    number2,
    setNumber2,
    sum,
    setSum,
  };
};
