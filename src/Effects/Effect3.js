import React, { useState, useEffect} from "react";

const Effect3 = () => {
    const [num, setNum] = useState(0);
    const [numSquare, setNumSquare] = useState(0);

    useEffect(() => {
      setNumSquare(Number(num) ** 2);
    }, [num])

    return (
      <>
        <p>Num: {num}</p>
        <p>Num Square: {numSquare}</p>
        <input
          className="border border-black bg-yellow-200 w-64"
          onChange={(e) => setNum(e.target.value)}
      />
      </>
    )
}

export default Effect3;