import React, { useState } from "react";


const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <button className="bg-red-700" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <div className="bg-purple-700">Show</div>}
    </div>
  );
};

export default State7;
