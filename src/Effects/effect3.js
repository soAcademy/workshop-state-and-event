import {useState,useEffect} from 'react';

const Effect3=()=>{
  const[num,setNum]=useState(0);
  const[sumSqt,setSumSqt]=useState(0);
  useEffect(()=>{
    setSumSqt(Number(num)**2);  //เราได้ input มาเป็น string เลยต้องใข้ Number  
  },[num]);

  return(
    <>
    <p>Num : {num}</p>
    <input className='bg-red-200' onChange={(e)=>setNum(e.target.value)}/>
    <p className='bg-blue-200 w-[200px]'>Sum Square : {sumSqt}</p>
    <input className='' onChange={(e)=>setSumSqt(e.target.value)}/>
    </>
  );
};
export default Effect3;