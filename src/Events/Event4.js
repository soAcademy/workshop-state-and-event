import React from 'react';
const Event4 =()=>{
  const change =(e)=> console.log(e.target.value);

  return(
    <div className='my-2 p-2'>
      <input className='border-2 border-blue-200  rounded-full w-[150px]' onChange={(e)=>change(e)}></input></div>
  );
};
export default Event4;