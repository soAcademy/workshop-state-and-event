import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <button className="bg-blue-600 p-5 rounded-xl" onClick={() => setToggle(!toggle)}>
        เมนู
      </button>
      {toggle && <div className="bg-pink-600 p-5 rounded-xl">
        กระเพราหมู+ไข่ดาว 
        <img src="https://tecnogasthai.com/wp-content/uploads/2022/07/pic-01-3.png" 
        alt="Kapow" />  
        </div>}
    </div>
  );
};

export default State7;