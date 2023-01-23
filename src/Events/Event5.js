import React from "react";

const Event5 = () => {
  return (
    <div className="my-2">
      <div
        className="bg-red-300 h-20"
        onMouseOver={() => console.log("Hover Me")}
        onMouseLeave={() => console.log("Leave")}
      >
        Hover me!
      </div>
    </div>
  );
};

export default Event5;
