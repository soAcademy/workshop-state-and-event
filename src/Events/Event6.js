import React from "react";

const event6 = () => {
  return (
    <div className="my-2">
      <input
        className="border-2 bg-red-200"
        onSelect={() => console.log("hello 6")}
        placeholder="Hello"
      ></input>
    </div>
  );
};

export default event6;
