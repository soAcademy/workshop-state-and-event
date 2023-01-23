import React,{useState} from 'react';

const State1=()=>{
 const [title,setTitle]=useState("Dew");

return(
  <div className='bg-cyan-500'>
    <p>{title}</p>
    <div>
      <button className='bg-cyan-200'onClick={()=>setTitle("Kad")}>Change button</button>
    </div>
  </div>
);
};
export default State1;