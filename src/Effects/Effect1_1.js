import React, { useState, useEffect } from "react";

const Effect1_1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    console.log(counter, counter2);
  });
  // }, [counter, counter2]);

  return (
    <>
    {counter}, {counter2}
      <button
        className="bg-yellow-300 w-24"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="bg-yellow-300 w-24"
        onClick={() => setCounter2(counter2 + 1)}
      >
        Increase2
      </button>
    </>
  );
};

export default Effect1_1;
// ตัวอย่างที่ใช้กันตอนนี้ก็มีตัว การสั่งซื้ออาหารที่เราสามารถเข้าไปสัั่งอาหารแล้วถ้าเราไม่ได้ยืนยันมันก็ไม่ได้สั่งจริงอ่ะ เหมือนเราเข้าไปกดกรอกจำนวนสินค้าก่อนงี้
//เหมือนตัว Component แรกจะใช้สำหรับการ อัพเดทว่ามีการใช้งานตัวนี้แล้วนะ แล้วตัวที่สองคือ