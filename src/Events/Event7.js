import React from "react";

const Event7=()=>{
  const summitData =(e)=>{
    e.preventDefault();  //ป้องกันไม่ให้ refresh เวลากรอกข้อมูลแล้วกด summit
    const data = {
    name : e.target['name'].value,
    tel : e.target['tel'].value,
    email : e.target['email'].value
  }
  console.log(data);
  };

return (
  <form className="bg-cyan-500 p-2" onSubmit={(e)=>summitData(e)}>
    <div><input className="bg-slate-200 m-2" placeholder="ชื่อ" id="name" required /></div>
    <div><input className="bg-slate-200 m-2" placeholder="เบอร์" id="tel" required /></div>
    <div><input className="bg-slate-200 m-2" placeholder="อีเมล" id="email" required /></div>
    <button className="bg-red-300 p-4">Submit</button>


  </form>

);
};
export default Event7;