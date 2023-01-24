import React from "react";
import { useState, useEffect } from "react";

// 3. สร้างตัวแปร useState 2 ตัว คือ num และ numSquare โดย num มีค่าเริ่มต้นคือ 0 จากนั้นสร้าง input ให้กรอกตัวเลข เมื่อมีการเปลี่ยนแปลงค่า จะแสดง ค่า num และ numSquare โดย numSquare = num * num

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2); //ยกกำลัง 2 = square
  }, [num]);

  return (
    <>
      <h1 className="text-xl">Num:{num}</h1>
      <h1 className="text-2xl">Num Square:{numSquare}</h1>
      <input
        className="bg-sky-500 p-3 text-2xl"
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default Effect3;
