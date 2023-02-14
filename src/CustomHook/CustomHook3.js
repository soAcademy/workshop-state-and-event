import React, {useState, useEffect} from "react";

const useNum = () => {
  const [num, setNum] = useState(0);
  return {
    num,
    setNum,
  }
}

const useNumSquare = ({num}) => {
  const [numSquare, setNumSquare] = useState(0);
  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);
  return {
    numSquare,
    setNumSquare,
  }
}

const CustomHook3 = () => {
  const {num, setNum} = useNum();
  const {numSquare, setNumSquare} = useNumSquare({num})
  return (
    <>
      <p>Num: {num}</p>
      <p>Num Square: {numSquare}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default CustomHook3;