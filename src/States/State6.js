import { useState } from "react";

const State6 = () => {
  const [number, setNumber] = useState(0);
  const calculate = (e) => {
    e.preventDefault()
    setNumber(Number(e.target.form['number1'].value) + Number(e.target.form['number2'].value))
  }
  return (
    <div className="flex flex-col w-fit m-2 p-2 bg-gray-300 rounded-lg items-center">
      <form>
      <input
        type="number"
        placeholder="Number1"
        className="bg-gray-200 rounded-lg m-2 w-24 px-2"
        id="number1"
        onChange={(e)=>setNumber(e.target.value)}
      />
      +
      <input
        type="number"
        placeholder="Number2"
        className="bg-gray-200 rounded-lg m-2 w-24 px-2"
        id="number2"
      />
      <div className="flex w-full justify-evenly">
        <button className="px-4 mx-2 bg-gray-400 rounded-lg" onClick={calculate}>Calculate</button>
        <p className="mx-2 bg-gray-100 rounded-lg w-fit px-4 text-red-500">{number}</p>
      </div>
      </form>
    </div>
  );
};

export default State6;
