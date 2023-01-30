import React, {useState} from 'react';

const State77=()=>{
  const[toggle,setToggle]=useState(false);
  const[toggle2,setToggle2]=useState(false);
  

  return(
    <>
    <div className='m-10 w-[100px]'>
      <button className='bg-cyan-400 w-full rounded-lg' onClick={()=>setToggle(!toggle)}>Menu</button>
      {toggle && <div className=' w-full text-center '> <div className='bg-red-200 rounded-lg'>Show</div> 
                                                        <div className='bg-cyan-400 w-full  rounded-lg'>Dew</div>
                                                        <div className='bg-yellow-400 w-full rounded-lg'>Contact</div>
      </div>}
                  
    </div>



    </>
  );
};
export default State77;
