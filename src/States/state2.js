import React,{ useState } from "react";
 
const State2 =()=>{
  const [counter, setCounter] = useState(0);

  return(
    <>
    <p>{counter}</p>
    <p>
      <button className="bg-cyan-600" onClick={() => setCounter(counter + 1)}>Increase number </button>
    </p></>
  );
};
export default State2;