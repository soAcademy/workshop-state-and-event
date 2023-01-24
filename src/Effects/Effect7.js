//สร้างปุ่ม 2 ปุ่มคือ Light 1 และ Light 2 โดยเก็บตัวแปร Boolean โดย 2 ปุ่มนี้เป็น toggle
//คือ true/false ถ้า light1 และ light2 เป็น true ทั้งคู่ ให้แสดงค่า เป็น "Hello"
//ถ้าไม่ใช่ให้แสดงค่าเป็น "Hola" โดย default ให้เป็น false ทั้งหมด

import { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [word, setWord] = useState("Hola");

  const classBtnRed =
    "bg-red-200 active:bg-red-300 border-2 border-red-300 rounded-lg shadow-md active:shadow-lg py-2 p-4 m-4";
  const classBtnGreen =
    "bg-green-200 active:bg-green-300 border-2 border-green-300 rounded-lg shadow-md active:shadow-lg py-2 p-4 m-4";

  useEffect(() => {
    light1 && light2 ? setWord("Hello") : setWord("Hola");
  }, [light1, light2]);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="">
        <p className="text-center p-2">{word}</p>
        <button
          type="button"
          className={light1 ? classBtnGreen : classBtnRed}
          onClick={() => setLight1(!light1)}
        >
          Light 1
        </button>
        <button
          type="button"
          className={light2 ? classBtnGreen : classBtnRed}
          onClick={() => setLight2(!light2)}
        >
          Light 2
        </button>
      </div>
    </div>
  );
};

export default Effect7;
