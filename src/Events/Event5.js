import React from "react";

const Event5 = () => {
  return (
    <div
      className="my-2 bg-yellow-200 h-64"
      onMouseOver={() => console.log("Hello 5")}
    >
      Hover ME
    </div>
  );
};

export default Event5;
