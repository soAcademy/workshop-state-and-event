import React from "react";

const Event5 = () => {
  return (
    <div
      className="bg-blue-400 border-2 rounded-lg h-64 text-center text-2xl m-3 "
      onMouseOver={() => console.log("Hello 5")}
    >
      Event onMouseOver
    </div>
  );
};

export default Event5;
