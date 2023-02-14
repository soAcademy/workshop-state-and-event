import React, { useState } from 'react';

export const useInput = () => {  
  const [input, setInput] = useState({
    age: 25,
    retireAge: 55,
    inflation: 4.27,
    deadAge: 75,
    cost: 30000,
    invest: 3000,
    percentYield: 8,
  });
  return {input, setInput}
}