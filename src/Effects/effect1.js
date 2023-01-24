import {useState,useEffect} from 'react';

const Effect1 =()=>{
  const[count,setCounter] = useState(0);
  useEffect(()=>{
    document.title = `Change ${count}`
  },[count]);

  return(
    <button className='bg-red-200' onClick={()=>setCounter(count+1)}>Update</button>
  );
};
export default Effect1;