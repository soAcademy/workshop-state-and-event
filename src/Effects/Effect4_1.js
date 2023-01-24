// 4. สร้าง ตัวนับเวลาถอยหลัง (Countdown Timer) โดย ลดค่าลง ทีละ 1 วินาที มีค่าเริ่มต้น 10 วินาที โดยลดค่าลงน้อยสุด 1 วินาที ห้ามติดลบ

import React, { useState, useEffect } from "react";

const Effect4_1 = () => {
  const [countdown, setCountDown] = useState(10);

  const onSetCountDown = () => {
    setCountDown(countdown - 1);
  };
  useEffect(() => {
    const timeOutID = setTimeout(onSetCountDown, 1000);
    countdown === 1 && clearTimeout(timeOutID);

    return () => {
      clearTimeout(timeOutID);
    };
  }, [countdown]);

  return (
    <div>
      <h1>Countdown: {countdown}</h1>
    </div>
  );
};

export default Effect4_1;
