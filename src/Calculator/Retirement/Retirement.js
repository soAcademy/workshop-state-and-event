import { useCalculator, useInput } from "./Hooks";
import { RetirementForm, RetirementTable } from "./Components";
const Retirement = () => {
  const { input, setInput } = useInput();
  const { result, setResult, sum, calculate } = useCalculator(input);

  return (
    <div className="flex flex-col font-kanit">
      <p className="mx-auto my-14 text-xl font-bold">แผนการเกษียญของฉัน</p>
      <RetirementForm setInput={setInput} />
      <div
        className="mx-auto my-8 flex 
      flex-col space-y-4 text-2xl font-bold"
      >
        <p>คุณต้องมีเงินเก็บตอนอายุ {input.retireAge} ปี จำนวน</p>
        <p id="result" className="mx-auto text-red-600">
          {Number(
            sum(
              result
                .filter((e) => e.age > input.retireAge)
                .map((e) => Number(e.cost))
            )
          ).toLocaleString()}
        </p>
      </div>
      <RetirementTable result={result} />
    </div>
  );
};

export default Retirement;
