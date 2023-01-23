import React from "react";
import { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <button className="bg-green-400-300" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <div className="bg-gray-400 ">drop down</div>}
    </div>
  );
};

export default State7;
