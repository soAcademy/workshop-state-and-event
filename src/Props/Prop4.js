import React, { useState } from "react";

const IncreaseComponent = ({counterData, setCounter2 }) => (
  <div>
    <button className="bg-yellow-300" onClick={() => setCounter2(counterData + 1)}>
      Increase
    </button>
  </div>
);

//มันคือ component
const DecreaseComponent = ({ counterData, setCounter }) => (
  <div>
    <button className="bg-orange-300" onClick={() => setCounter(counterData - 1)}>
      Decrease
    </button>
  </div>
);

const Prop4 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {counter}
      <div className="container flex flex-container">
      <IncreaseComponent counterData={counter} setCounter2={setCounter} />
      <DecreaseComponent counterData={counter} setCounter={setCounter} />
      </div>
    </>
  );
};

export default Prop4;
// เราแค่อยากให้รู้ว่า เราสามารถเรียกทั้ง Function และ prop มาให้
// route คือคนที่เรียก component มาใช้
//ตัวนี้เหมือนเราสร้าง Function ให้เสร็จตั้งแต่แรกแล้วค่อยมาคืนค่าที่เราต้องการอีกทีข้างใน
// CAllback มันคือการส่งfuction เข้าไปใน component  แล้ว component นั่นเรียกว่า function 
// เราสร้างตัว button แยกไปตังแต่แรก ทำให้เราสามารถ reuse ได้เรื่อย ๆ เป็นเหมือนกั  โดยที่เราไม่ต้องมานั่ง Hard code
// function ปกติมันจะ return เป้น string, number, object ในขณะที่ component ทัรจะ return เป็น HTML (เป็น div เป็น button)