
import {useState,useEffect} from 'react';

const Effect2=()=>{
  const[name,setName]=useState('Dew');
  const[profile,setProfile]=useState('BKK');
  useEffect(()=>{
    setProfile("UTH");
  },[name]);
  return(
    <>
    <p>Name:{name}</p>
    <p>Address:{profile}</p>
    <input type="text"  className='bg-red-200' onChange={(e)=>setName(e.target.value)}/> 
    </>
  );
};
export default Effect2;