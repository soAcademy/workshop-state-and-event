// 6. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยโหลดข้อมูลเมื่อกดปุ่ม Fetch

import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const handleClick = () => {
    fireAPI();
  };
  const fireAPI = () => {
    axios({
      method: "GET",
      url: " https://pokeapi.co/api/v2/pokemon/ditto",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  console.count("render");
  return (
    <div>
      <button
        className="bg-sky-500 text-white p-3 rounded-[10px]"
        onClick={() => handleClick()}
      >
        Fetch
      </button>
    </div>
  );
};

export default Effect6;
