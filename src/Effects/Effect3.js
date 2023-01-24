import { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    console.log(num);

    setNumSquare(num ** 2);
  }, [num]);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{`numSquare: ${numSquare} sq.units`}</p>
        <input
          type="number"
          placeholder="Enter your name"
          className="border-2 rounded-lg mt-3 p-2"
          onChange={(e) => setNum(Number(e.target.value))}
          value={num}
        />
      </div>
    </div>
  );
};

export default Effect3;
