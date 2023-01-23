import React from "react";

const Event5 = () => {
  return (
    <div
      className="bg-gradient-to-r from-cyan-400 to-blue-400 border-2 rounded-lg h-64 text-center text-2xl m-3 "
      onMouseOver={() => console.log("Hello 5")}
    >
      Event onMouseOver
    </div>
  );
};

export default Event5;
