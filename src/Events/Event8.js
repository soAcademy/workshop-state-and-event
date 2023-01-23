import React from 'react';

const Event8=()=>{
  const upLoad=(e)=>{
    e.preventDefault();
    console.log(e.target['upload'].value);
  };
  return(
    <div className='border-1 border-red-200 m-5'>
    <input className="bg-cyan-200 h-15" type="file" accept="image/png, image/jpeg, image/jpg" id="upload" onChange={(e)=>upLoad(e)}/>
    </div>
  );

};
export default Event8;