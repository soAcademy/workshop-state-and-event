import { useState } from "react";

//Increase component state

const Increase = ({ counter, setCounter }) => (
  <div>
    <button className="bg-red-200" onClick={() => setCounter(counter + 1)}>
      Increase
    </button>
  </div>
);
//Decrease component state
const Decrease=({counter2,setCounter2})=>(
  <div>
    <button className="bg-sky-200" onClick={()=>setCounter2(counter2-1)}>
      Decrease
    </button>
  </div>
);
//Create function to import components 
const Prop4= ()=>{
  const[counter3,setCounter3]=useState(0);
  return(
    <>
    {counter3}
    <Increase counter={counter3} setCounter={setCounter3}/>
    <Decrease counter2={counter3} setCounter2={setCounter3}/>
    </>
  );
};
export default Prop4;
