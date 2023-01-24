import { useState, useEffect } from "react";

const Effect1_1 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    document.title = `Counter ${count}`;
  }, []);
  useEffect(() => {
    document.title = `Counter ${count}`;
  }, [count]);
  return (
    <>
      {count},{count2}
      <button
        className="bg-green-500 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increase 1
      </button>
      <button
        className="bg-sky-500 text-white"
        onClick={() => setCount2(count + 1)}
      >
        Increase 2
      </button>
    </>
  );
};

export default Effect1_1;
