import React,{useState} from 'react';
const State4=()=>{
    const[inputNumber,setInputNumber]=useState();
  return(
    <>
    <div className='bg-sky-500'>{inputNumber}</div>
    <input className='bg-sky-600' type="number" onChange={(e)=>setInputNumber(e.target.value)}/>
    <button className='bg-cyan-300' type="number"onClick={()=>setInputNumber(Number(inputNumber)+7)}>Calculate</button>

    </>
  );
};
export default State4;