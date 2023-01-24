//ดึงข้อมูล API ผ่าน GET Method โดยใช้ axios จาก https://api.sampleapis.com/coffee/hot
//โดยดึงตั้งแต่โหลดหน้าเว็บ

import { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
      // console.log(res);
      setData(res);
    });
  }, []);

  return <>{JSON.stringify(data)}</>;
};

export default Effect5;
