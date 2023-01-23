import React from "react";

const Event5 = () => {
  const output = () => console.log("HelloWorld!");

  return (
    <div className="m-2 bg-red-200 w-40 h-20" onMouseOver={output}>
      Hover Here
    </div>
  );
};

export default Event5;