import React from "react";

function Event5() {
  return (
    <div
      className="my-2 bg-gray-500 h-64 text-white"
      onMouseOver={() => console.log("Hello world 5")}
      onMouseLeave={() => console.log("Exit ! ")}
    >
      Hover Me ...
    </div>
  );
}

export default Event5;
