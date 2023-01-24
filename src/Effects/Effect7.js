import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [greeting, setGreeting] = useState("Hola");

  useEffect(() => {
    light1 && light2 ? setGreeting("Hello") : setGreeting("Hola");
  }, [light1, light2]);

  return (
    <>
      <div>{greeting}</div>
      <div>
        <button
          className="bg-red-300 p-4 w-24"
          onClick={() => setLight1(!light1)}
        >
          {light1 ? "ON" : "OFF"}
        </button>
        <button
          className="bg-green-300 p-4 w-24"
          onClick={() => setLight2(!light2)}
        >
          {light2 ? "ON": "OFF"}
        </button>
      </div>
    </>
  );
};

export default Effect7;



// เรามองมันเป็นไฟลสองดวงท ี่ถ้ามัน On ทั้งคู่มันจะเป็น Hello เป็นการเล่นกับสอง useeffect 
//ซึ่งวิธีทำเราจะประกาศเป็น state ขึ้นมาสามตัวก่อนที่จะใช้ use effect สองค่า ที่ถ้ามันจริงสองดวง 
// มีเครื่องหมายตกใจเพราะมันเป็นค่า Booleen