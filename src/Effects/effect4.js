import {useState,useEffect} from 'react';

const Effect4=()=>{
  const[time,setTime]=useState(10);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(time-1)},1000);

    time >1 || clearInterval(interval);
    return ()=>clearInterval(interval); 
  },[time]);

  return(
    <p>Count down: {time}</p>
  );
};
export default Effect4;