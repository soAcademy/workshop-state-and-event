import React, {useState} from 'react';


//Create Custom hook 
const useNumber =()=>{
  const [number1,setNumber1] = useState(0);
  const [number2,setNumber2] = useState(0);
  const [sum,setSum] = useState(0);
  return {
    number1,
    setNumber1,
    number2,
    setNumber2,
    sum,
    setSum
  } 
};

//เรียกใช้ customHook2 
const CustomHook2 = () =>{
  const{
    number1,
    setNumber1,
    number2,
    setNumber2,
    sum,
    setSum
  } = useNumber();
  return (
  <>
  <div>
    <div>
      Input1:{number1}
      <input
        type='number'
        className='border bg-red-200'
        onChange ={(e)=>setNumber1(e.target.value)}
        value={number1}/>
    </div>
    <div>
      Input1:{number2}
      <input
        type='number'
        className='border bg-blue-200'
        onChange ={(e)=>setNumber2(e.target.value)}
        value={number2}/>
    </div>
    <div>
      sum:{sum}
      <button onClick={()=>setSum(Number(number1) + Number(number2))}
              className='p-4 bg-green-400'
      >Calculate</button>
    </div>
  </div>
  </>
  )
};
export default CustomHook2;