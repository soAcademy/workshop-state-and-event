import React, {useState} from 'react';

const State7=()=>{
  const[toggle,setToggle]=useState(false);
  const[toggle2,setToggle2]=useState(false);
  

  return(
    <>
    <div className='m-10 w-[100px]'>
      <button className='bg-cyan-400 w-full rounded-full' onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <div className='bg-yellow-500 w-full text-center rounded-full'>Show
        <button className='bg-cyan-400 w-full rounded-full' onClick={()=>setToggle(!toggle2)}>Contact</button>
        Show3</div>}
     
    </div>



    </>
  );
};
export default State7;
