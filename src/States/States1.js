import React, { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Ball");

  return (
    <div className="bg-blue-200">
      <p>{title}</p>
      <p>
        <button className="p-4 bg-red-400" onClick={() => setTitle("Pooves")}>
          เปลี่ยนชื่อ
        </button>
      </p>
    </div>
  );
};

export default State1;