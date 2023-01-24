import { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    console.log("counter: " + counter);

    document.title = `Counter: ${counter}`;
  });

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="flex">
        <div className="m-4">
          <p className="text-center">{`Counter: ${counter}`}</p>
          <button
            type="button"
            className="bg-red-200 rounded-lg shadow-md active:bg-red-300 active:shadow-lg p-2 mt-4"
            onClick={() => setCounter(counter + 1)}
          >
            Click + 1
          </button>
        </div>
        <div className="m-4">
          <p className="text-center">{`Counter: ${counter2}`}</p>
          <button
            type="button"
            className="bg-green-200 rounded-lg shadow-md active:bg-green-300 active:shadow-lg p-2 mt-4"
            onClick={() => setCounter2(counter2 + 1)}
          >
            Click + 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Effect1;
