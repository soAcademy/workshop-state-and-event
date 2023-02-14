import { useState, useEffect } from "react";

const useNumber = () => {
  const [number, setNumber] = useState(0);
  return {
    number,
    setNumber,
  };
};

const useNumSquare = ({ num }) => {
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);
  return { numSquare, setNumSquare };
};

const CustomHook3 = () => {
  const {number,setNumber} = useNumber();
  const {numSquare, setNumSquare} = useNumSquare({num});
  return (
    <>
      <p>Num : {number}</p>
      <p>Num square : {numSquare}</p>
      <input  className="border border-black bg-yellow-200 w-64 "
              onChange={(e)=>setNumber(e.target.value)}/>
    </>
  );
};
