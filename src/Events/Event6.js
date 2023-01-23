import React from "react";

const Event6 = () => {
  return (
    <input
      type="text"
      className="border-2 border-indigo-400 rounded-lg p-1 m-3 text-center"
      onSelect={() => console.log("Hello 6")}
      placeholder="Hello"
    />
  );
};

export default Event6;
