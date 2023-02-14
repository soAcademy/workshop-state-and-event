import React, { useState } from "react";

// const CustomHook2 = () => {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
//   const [sum, setSum] = useState(0);

//   return (
//     <div className="p-4 w-full">
//       <div className="flex">
//         <p className="text-xl font-semibold">
//           {number1} + {number2} = {sum}
//         </p>
//       </div>
//       <div>
//         <input
//           type="number"
//           className="border bg-pink-200 mt-3 rounded"
//           onChange={(e) => setNumber1(e.target.value)}
//         />
//         <input
//           type="number"
//           className="border bg-pink-300 mt-3 ml-3 rounded"
//           onChange={(e) => setNumber2(e.target.value)}
//         />
//         <button
//           className=" bg-purple-200 ml-3 h-10 px-2"
//           onClick={() => setSum(Number(number1) + Number(number2))}
//         >
//           Calculate
//         </button>
//       </div>
//     </div>
//   );
// };

const useNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return {
    number1: number1,
    setNumber1: setNumber1,
    number2: number2,
    setNumber2: setNumber2,
    sum: sum,
    setSum: setSum,
  };
};

const CustomHook2 = () => {
  const { number1, setNumber1, number2, setNumber2, sum, setSum } = useNumber();

  return (
    <div className="p-4 w-full">
      <div className="flex">
        <p className="text-xl font-semibold">
          {number1} + {number2} = {sum}
        </p>
      </div>
      <div>
        <input
          type="number"
          className="border bg-pink-200 mt-3 rounded"
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="number"
          className="border bg-pink-300 mt-3 ml-3 rounded"
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button
          className=" bg-purple-200 ml-3 h-10 px-2"
          onClick={() => setSum(Number(number1) + Number(number2))}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CustomHook2;
