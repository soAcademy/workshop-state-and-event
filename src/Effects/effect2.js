
import {useState,useEffect} from 'react';

const Effect2=()=>{
  const[name,setName]=useState('Dew');
  const[profile,setProfile]=useState('BKK');
  useEffect(()=>{
    setProfile("UTH");  //Listen ตัวแปรไหน ไม่ควร set ตัวแปรนั้น ไม่งั้นจะเกิดการวน loop 
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