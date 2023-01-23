import React from "react";

const Event4 = () => {
  const inputEvent = (e) => console.log(e.target.value);
  return (
    <div className="m-3">
      <input
        type="text"
        className="border-2 border-green-400 rounded-lg p-1"
        onChange={(e) => inputEvent(e)}
      />
    </div>
  );
};

export default Event4;
