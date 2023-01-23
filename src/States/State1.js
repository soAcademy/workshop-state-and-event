import { useState } from "react";

const State1 = () => {
  const [state, setState] = useState("Bin");
  const click = () => {
    state === "Bin" ? setState("Jam") : setState("Bin");
  };
  return (
    <div>
      <button onClick={click} className="bg-gray-300 rounded-lg p-2 m-2 font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500">
        State1 : Bin Jam
      </button>
      {state}
    </div>
  );
};

export default State1;
