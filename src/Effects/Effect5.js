import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// 5. ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก `https://api.sampleapis.com/coffee/hot` โดยดึงตั้งแต่โหลดหน้าเว็บ

const Effect5 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Effect5;
