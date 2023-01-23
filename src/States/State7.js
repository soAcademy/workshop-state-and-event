import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className="bg-red-200 rounded-lg p-2 m-2"
        onClick={() => setToggle(!toggle)}
      >
        toggle
      </button>
      {toggle && <div className="bg-green-300">Show</div>}
    </div>
  );
};

export default State7;
