import React from "react";
import { useState, useEffect } from "react";

// 4. สร้าง ตัวนับเวลาถอยหลัง (Countdown Timer) โดย ลดค่าลง ทีละ 1 วินาที มีค่าเริ่มต้น 10 วินาที โดยลดค่าลงน้อยสุด 1 วินาที ห้ามติดลบ

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    //countdown -1 per 1 sec
    countdown > 1 || clearInterval(interval);
    // true||true
    //สั่งให้หยุดทำ ก่อนจบ 1วิ
    return () => clearInterval(interval);
    // clear เมื่อถึง 1
  }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};
export default Effect4;
