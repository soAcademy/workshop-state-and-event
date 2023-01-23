import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="m-3 bg-gradient-to-b from-violet-400 to-red-400 rounded-lg">
      <button
        onClick={() => setToggle(!toggle)}
        className="m-2 text-3xl text-white"
      >
        <FaAlignJustify />
      </button>
      {toggle && (
        <div className="text-2xl text-white">
          <ul className="my-2 ml-10 pb-2">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default State7;
