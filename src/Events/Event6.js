import React from "react";

const Event6 = () => {
  return (
    <input
      className="my-2 bg-yellow-200 border border-black"
      onSelect={() => console.log("Hello 6")}
      placeholder="Hello"
    />
  );
};

export default Event6;
