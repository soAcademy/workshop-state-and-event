import {useState} from 'react';
const NumberRender = ({number})=> <div> counter: {number}</div> //รับค่า value มาจาก NumberRender

//สร้าง state counter 
const Prop3 =()=>{
const [counter,setCounter] = useState(0); 

return(
  <>  
    <NumberRender number={counter}/>  
    <button className='bg-red-200' onClick={()=>setCounter(counter+1)}>Increase</button>
  </>
);

};
export default Prop3;