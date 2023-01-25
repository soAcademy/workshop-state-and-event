import {useState,useEffect} from 'react';

const Effect7=()=>{
  const[light1,setLight1]=useState(false);
  const[light2,setLight2]=useState(false);
  const[greeting,setGreeting]=useState('Halo');
  useEffect(()=>{
    light1 || light2 ? setGreeting("True"): setGreeting("False");
  },[light1,light2]);


  return(
    <>
    <p>{greeting}</p>
    <button className='bg-red-200' onClick={()=>setLight1(!light1)}>{light1?"True":"False"}</button>
    <button className='bg-blue-200' onClick={()=>setLight2(!light2)}>{light2?"True":"False"}</button>
    </>
  );

};
export default Effect7;