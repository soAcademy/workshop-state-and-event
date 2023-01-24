import { useState } from 'react';

const Increase = ({number1,setNumber1})=>{
  <button className='bg-red-200' onClick={()=>setNumber(number1+1)}>Increase</button>
};
const Decrease = ({number2,setNumber2})=>{
  <button className='bg-blue-200' onClick={()=>setNumber(number2-1)}>Decrease</button>
};

const PropTest=()=>{
  const[{number3,setNumber3}]=useState(0);
  return(
    <p>{number3}</p>
    
  );

};