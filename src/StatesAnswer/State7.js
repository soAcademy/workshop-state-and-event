import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <button className="bg-red-700" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <div className="bg-purple-700">Show</div>}
    </div>
  );
};

<<<<<<< HEAD
export default State7;
=======
export default State7;
>>>>>>> 2ca4ef9b632eeac10e2c819a85109bdb1fea7f85
