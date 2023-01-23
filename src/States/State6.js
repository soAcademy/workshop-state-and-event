import { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="flex m-2">
        <input
          type="number"
          placeholder="Enter your number1"
          className="border-2 rounded-lg m-2 p-2"
          onChange={(e) => setNumber1(Number(e.target.value))}
          value={number1}
        />
        <p className="my-2 mx-0 p-2">+</p>
        <input
          type="number"
          placeholder="Enter your number1"
          className="border-2 rounded-lg m-2 p-2"
          onChange={(e) => setNumber2(Number(e.target.value))}
          value={number2}
        />

        <button
          type="button"
          className="bg-green-200 rounded-lg shadow-md active:bg-green-300 active:shadow-lg m-2 p-2 px-3"
          onClick={() => setSum(number1 + number2)}
        >
          =
        </button>

        <div className="w-[100px] border-2 rounded-lg m-2 p-2">
          <p className="text-center">{sum}</p>
        </div>
      </div>
    </div>
  );
};

export default State6;
