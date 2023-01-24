import React,{useState} from 'react';

const State1=()=>{
 const [count,setCounter]=useState(10);

return(
  <div className='bg-cyan-500'>
    <p>{count}</p>
    <div>
      <button className='bg-cyan-200'onClick={()=>setCounter(count+2)}>Change button</button>
    </div>
  </div>
);
};
export default State1;