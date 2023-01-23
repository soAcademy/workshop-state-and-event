import React,{ useState } from "react";
 
const State3 =()=>{
  const [counter, setCounter] = useState(20);

  return(
    <>
    <p>{counter}</p>
    <p>
      <button className="bg-cyan-600" onClick={() => setCounter(counter + 1)}>Increase number </button>
    </p>
    <p><button className="bg-blue-600" onClick={() => setCounter(counter - 1)}>Decrease number </button>
      </p>
    </>
  );
};
export default State3;