import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  return (
    <div className="bg-red-500">
      <button className="bg-red-700" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && (
        <div className="bg-purple-700">
       Show
    
            <button className="bg-red-700" onClick={() => setToggle1(!toggle1)}>
              Toggle1
            </button>
            {toggle1 && <div className="bg-purple-700">Show1</div>}

          
        </div>
      )}
      {toggle && <div className="bg-purple-700">Show</div>}
      {toggle && <div className="bg-purple-700">Show</div>}
    </div>
  );
};

export default State7;
