import { useState } from "react";

const State1 = () => {
  const [state, setState] = useState("Bin");
  const click = () => {
    state === "Bin" ? setState("Jam") : setState("Bin");
    console.log({ state });
  };
  return (
    <div>
      <button onClick={click} className="bg-gray-300 rounded-lg p-2 m-2">
        State1 : Bin Jam
      </button>
      {state}
    </div>
  );
};

export default State1;
