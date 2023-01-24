// 7. สร้างปุ่ม 2 ปุ่มคือ Light 1 และ Light 2 โดยเก็บตัวแปร Boolean โดย 2 ปุ่มนี้เป็น toggle คือ true/false ถ้า light1 และ light2 เป็น true ทั้งคู่ ให้แสดงค่า เป็น "Hello" ถ้าไม่ใช่ให้แสดงค่าเป็น "Hola" โดย default ให้เป็น false ทั้งหมด

import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const [greeting, setGreeting] = useState("Hola");

  useEffect(() => {
    if (toggle1 === true && toggle2 === true) {
      setGreeting("Hello!");
    } else if (toggle1 === false && toggle2 === false) {
      setGreeting("Hola!");
    } else {
      setGreeting("Hola!");
    }
  }, [toggle1, toggle2]);
  //หลังจากสร้าง useEffect ก็ต้องใส่ dependency ก่อนเลย ต้องคิดว่าค่าอะไรที่มีการเปลี่ยนแปลงเพื่อให้ useEffect ทำงานอีกรอบนึง
  return (
    <div>
      <div>{greeting}</div>
      <button
        className="bg-sky-500 text-white rounded-[10px] p-6 w-[120px]"
        onClick={() => setToggle1(!toggle1)}
      >
        btn
        {toggle1 === true ? "ON" : "OFF"}
      </button>
      <button
        className="bg-green-500 text-white rounded-[10px] p-6 w-[120px]"
        onClick={() => setToggle2(!toggle2)}
      >
        btn
        {toggle2 === true ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Effect7;
