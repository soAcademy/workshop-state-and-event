import {useState, useEffect} from 'react';

const Effect101=()=>{
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(100);
  useEffect(()=>{
    document.title=`Change ${count1}`
    console.log(count1)
    console.log(count2)
  },);
  return(
    <>
    <button className='bg-red-200' onClick={()=>setCount1(count1+1)}>Increase</button>
    <button className='bg-blue-200' onClick={()=>setCount2(count2+1)}>Increase2</button>
    </>
  );
};
export default Effect101;