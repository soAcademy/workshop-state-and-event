
import {useState} from 'react';
const NumberRender = ({number})=> <div> counter: {number}</div> //รับค่า value มาจาก NumberRender

//สร้างfuntioin Prop3 ซึ่งข้างในมี state counter 
const Prop3 =()=>{                         //สร้าง function Prop3
const [counter,setCounter] = useState(10); //set state

return(
  <>  
    <NumberRender number={counter}/>  {/*assign ค่าให้ NumberRender เท่ากับ counter*/}
    <button className='bg-red-200' onClick={()=>setCounter(counter+1)}>Increase</button>
  </>
);

};
export default Prop3;