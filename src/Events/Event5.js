import React from "react";

const Event5 = () => {
  return (
    <div className=" flex my-2 mx-2 bg-red-300 h-32 rounded-full" onMouseOver={() => console.log("Hello 5")}>
      <div className="mx-auto">
      Hover 5
      </div>
    </div>
  );
};

export default Event5;