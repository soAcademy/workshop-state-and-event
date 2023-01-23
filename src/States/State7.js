import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="bg-blue-300" onClick={() => setToggle(!toggle)}>
        Menu
      </button>
      {toggle && (
        <div className="bg-yellow-300">
          <p>Menu 1</p>
          <p>Menu 2</p>
          <p>Menu 3</p>
          <p>Menu 4</p>
        </div>
      )}
    </div>
  );
};

export default State7;
