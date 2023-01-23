import React,{useState} from 'react';

const State5 =()=>{
  const[customer,setCustomer]=useState({
    name:'Dew',
    locations:"Bkk"
  });
  return(
    <>
      <div className='bg-teal-400 w-1/3 p-2 ml-5 mt-4'>{JSON.stringify(customer)}</div>
      <button className='bg-cyan-400 h-10 w-[100px] ml-5' onClick={()=>setCustomer({name:"Kad",locations:"Uth"})}>Change </button>
    </>
  );
};
export default State5;