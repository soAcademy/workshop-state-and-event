import React from "react";
import { useState, useEffect } from "react";

const Effect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter ${count}`;
  }, [count]);

  console.log(count);
  useEffect(() => {
    document.title = `Counter ${count}`;
  }, []);

  return (
    <>
      <button className="bg-green-600" onClick={() => setCount(count + 1)}>
        + num on title
      </button>
    </>
  );
};

export default Effect1;
