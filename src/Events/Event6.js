import React from "react";

const Event6 = () => {
  return (
    <input
      className="m-2 bg-pink-200 border-2 border-gray-600"
      onSelect={() => console.log("Selected!")}
      placeholder="Hello Hello World"
    />
  );
};

export default Event6;
