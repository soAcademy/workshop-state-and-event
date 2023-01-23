import React from "react";

function Event5() {
  return (
    <div
      className="my-2 bg-gray-500 h-64 text-white"
      onMouseOver={() => alert("Hello world 5")}
    >
      Hover Me ...
    </div>
  );
}

export default Event5;
