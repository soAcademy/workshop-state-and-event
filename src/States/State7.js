import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  return (
    <div className="">
      <button className="bg-red-700" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && (
        <div className="bg-purple-700">
          Show


          <button
            className="bg-purple-200"
            onClick={() => setToggle1(!toggle1)}
          >
            อะไรก็ได้
          </button>


          {toggle1 && <div className="bg-teal-700">เนื้อหาที่อยู่ข้างใน</div>}
        </div>
      )}

      {toggle && <div className="bg-purple-700">Show1</div>}
      {toggle && <div className="bg-purple-700">Show2</div>}
      {toggle && <div className="bg-purple-700">Show3</div>}
    </div>
  );
};

export default State7;

// && แปลว่ามันต้องจริงทั้งคู่ ในที่นี้คือ toggle ทีม่ันต้องจริงทั้ง๕ู่ มันถึงจะโชว์นะ อันนี้มันเป็นเทคนิคแทนที่จะใช้คำว่า If-else อ่ะ
