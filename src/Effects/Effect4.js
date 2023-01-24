import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1); //คือจำนวนตัวเลขที่ต้องการให้ลดลงทีละ 1
    }, 1000); // ระยะเวลาที่ต้องการให้เกิดการลดเลข คือ ทุกๆ 1000 มิลลิเซค(1วิ) เลขจะลดลงทีละ 1

    // if (countdown === 1) {
    //   clearInterval(interval);
    // }

    countdown > 0 || clearInterval(interval); // ถ้า countdown มากกว่า 1 ให้ทำงานต่อ ถ้า countdown === 1 ให้ clearInterval
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};

export default Effect4;
