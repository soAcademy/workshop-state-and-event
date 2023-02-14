import { useNumber } from "./useCustomHook";

export const CustomHook2 = () => {
  const { number1, setNumber1, number2, setNumber2, sum, setSum } = useNumber();
  return (
    <div className="">
      <div>
        Input1: {number1}
        <input
          type="number"
          className="border bg-red-300"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        Input2: {number2}
        <input
          type="number"
          className="border bg-yellow-300"
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        Sum: {sum}
        <button
          className="bg-green-200 p-4"
          onClick={() => setSum(Number(number1) + Number(number2))}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};
