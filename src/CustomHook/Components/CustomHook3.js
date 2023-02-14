import { useNumber, useNumSquare } from "./useCustomHook";

export const CustomHook3 = () => {
  const { number1, setNumber1 } = useNumber();
  const { numSquare } = useNumSquare(number1);

  return (
    <>
      <p>Num: {number1}</p>
      <p>Num Square: {numSquare}</p>
      <input
        className="w-64 border border-black bg-yellow-200"
        onChange={(e) => setNumber1(e.target.value)}
      />
    </>
  );
};
