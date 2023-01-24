import React,{ useState} from 'react';

const State6=()=>{
  const[number1,setNumber1]=useState(0);
  const[number2,setNumber2]=useState(0);
  const[sum,setSum]=useState(0);
  
  return(
    <>
    <div className='bg-yellow-200 w-[100px] m-5'>
    Input 1 : {number1}
    <input className='bg-sky-200'onChange={(e)=>setNumber1(e.target.value)}/>
    </div>
   
    <div className='bg-yellow-200 w-[100px] m-5'>
    Input 2 : {number2}
    <input className='bg-sky-200'onChange={(e)=>setNumber2(e.target.value)}/>
    </div>

    <div className='bg-slate-200 w-[100px] m-5'>
      Sum : {sum}
      <button className='bg-teal-500' onClick={()=>setSum(Number(number1) + Number(number2))}><br/>Sum</button>
    </div>
    </>
  );
};
export default State6;