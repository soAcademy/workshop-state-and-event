import React, { useState } from "react";

const IncreaseComponent = ({ counter, setCounter }) => (
  <div>
    <button className="p-4 bg-red-300 rounded-lg" onClick={() => setCounter(counter + 1)}>
      Increase
    </button>
  </div>
);

const DecreaseComponent = ({ counter, setCounter }) => (
  <div>
    <button className="p-4 bg-purple-300 rounded-lg" onClick={() => setCounter(counter - 1)}>
      Decrease
    </button>
  </div>
);

const Prop4 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {counter}
      <IncreaseComponent counter={counter} setCounter={setCounter} />
      <DecreaseComponent counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Prop4;

// callback ส่ง function เข้าไปใน components แล้ว components เรียกว่า function นั้น แล้วค่าใน root มีการเปลี่ยนแปลง





