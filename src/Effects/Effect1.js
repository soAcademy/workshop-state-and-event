import React, { useState,useEffect } from "react";
// component 1 that render value from component 2 
// const RenderComponent = ({ counterData }) => <div>Count = {counterData}</div>;
const RenderComponent = ( props ) => <div>Count = {props.counterData}</div>;


//component 2 that call component 1 then send to App.js
const Effect1 = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    //write code to call when state changes
     document.title = `Counter ${count}`;
    //  return () => {
    //    write code to clean up 
    //  }
   }, [count])
   
  return (
    <div className="bg-red-200">
      <RenderComponent counterData={count} />
      {/* เรียกรูปแบบการแสดงผลจาก component1 แล้วส่งค่า props ไปให้ โดยการส่งค่า count ที่เกิดจากฟังก์ชั้นของ useState*/}
        <button className="p-4 m-1 bg-blue-200" onClick={() => {
          setCount(count + 1)
        }}>
          Count ++
        </button>
        <button className="p-4 m-1 bg-blue-200" onClick={() => {
          setCount(count - 1)
        }}>
          Count --
        </button>
    </div>
  );
};

export default Effect1;