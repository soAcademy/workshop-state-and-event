import React from "react";

const Event5 = () => {
  return (
    <div
      className="my-2 bg-sky-600 h-64 w-64"
      onMouseOver={() => console.log("Hello5")}
      onMouseLeave={() => console.log("Exit")}
    >
      BELLOOOOO
    </div>
  );
};

export default Event5;