import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

  // async await, synchronouse, async มันคือ function ที่เราใช้ที่ต้องให้เราทำอะไรก่อนหน้าให้เสร็จก่อนที่จะไปในขั้นต่อไป

    // if (countdown === 1) {
    //   clearInterval(interval);
    // }


    //true
    //false || true
    // countdown > 1 && clearInterval(interval);
    countdown > 0 || clearInterval(interval);

    //true &&true
    //toggle && <div></div>
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};

export default Effect4;


//ให้ใช้ usueffect ที่เป็นตัวโครงสร้างพื้รนฐานร่วมกับ HTML
// setinterval เป็นโครงสร้างพื้นฐานจของ Javscript
// || แปลว่า หรือหรือ (จริงอย่างใดอย่างหนุึ่งก็พอ) กับอันอีกคือ && แอน แอน (ต้องจริงทั้งคู่)