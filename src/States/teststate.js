import React, {useState} from 'react';
import {
  FaFacebook,
  FaFax,
  FaEnvelope,
  FaGithub,
  FaBuilding,
  FaLinkedin,
  FaAlignJustify,
} from "react-icons/fa";

const ResuMe=()=>{
 const[input1,setInput1]=useState();
 const[input2,setInput2]=useState();
 const[sum,setSum]=useState();

 return (
  <>
    
  <input className='bg-sky-200' onChange={(e)=>setInput1(e.target.value)}/>
  <p>Input1:{input1}</p>
  <input className='bg-sky-400' onChange={(e)=>setInput2(e.target.value)}/>
  <p>Input2:{input2}</p>
  <button className='bg-red-200' onClick={(e)=>setSum(Number(input1)+Number(input2))}>Sum</button>
  <p>{sum}</p>
  
  </>
 );
};
  
export default ResuMe;