import React, { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gradient-to-r 
    from-blue-500 to-red-500">
      <p>{counter}</p>
      <p>
        <button className="p-4 bg-sky-400" 
        onClick={() => setCounter(counter + 1)}>
          Increase Counter
        </button>
        <button className="p-4 bg-yellow-400" 
        type="reset" 
        onClick={() => console.log("clear")  }>
          Clear
        </button>
      
      </p>
    </div>
  );
};

export default State2;