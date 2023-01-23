import  React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-row bg-gray-300 w-48 rounded-md p-2 m-2 items-center">
      <button onClick={() => setToggle(!toggle)} className="p-2">Toggle</button>
      {toggle && <div className="bg-red-500 rounded-md px-2 ">Hello World</div>}
    </div>
  );
};

export default State7;
