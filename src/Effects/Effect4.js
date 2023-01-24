import { useState, useEffect } from "react";

//สร้าง ตัวนับเวลาถอยหลัง (Countdown Timer) โดย ลดค่าลง ทีละ 1 วินาที
//มีค่าเริ่มต้น 10 วินาที โดยลดค่าลงน้อยสุด 1 วินาที ห้ามติดลบ

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

  // useEffect(() => {
  //   console.log('i fire once');
  //   const timerId = setInterval(() => {
  //     console.log('timerId start: ' + timerId);
  //     setCountdown((prev) => {
  //       console.log(prev);
  //       prev > 2 || clearInterval(timerId);
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => {
  //     console.log('timerId end: ' + timerId);
  //     clearInterval(timerId);
  //   }
  // }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    countdown > 1 || clearInterval(timerId);
    return () => clearInterval(timerId);
    
  },[countdown]);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{`Timer : ${countdown}`}</p>
      </div>
    </div>
  );
};

export default Effect4;
