import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    if (isFetch) {
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
      });
    }
  }, [isFetch]);

  return (
    <>
      <p>
        <button
          className="bg-teal-300 p-4 w-24"
          onClick={() => setIsFetch(true)}
        >
          Fetch
        </button>
      </p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};
export default Effect6;
// มันจะเหมือนข้อห้า แเราจะได้ทดลองทำเป็น functin แบบ set state ที่ถ้ามันมีการ toggle แล้วมันจะเรียก function ออกมา
// เป้าฟมาย คือเราอยากให้มีการ set button คู่กับ useeffect
// เราจะใช้งานอย่าง Facebook comment ที่เมื่อเราคลิกที่ปุ่ม comment แล้วมันจะโหลดออกมา ยิ่งกดยิ่งโหลดออกมา