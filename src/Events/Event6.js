import React from "react";

const Event6 = () => {
  return (
    <div>
      <input
        className=" my-2 border border-3 border-red-700 hover:border-blue-500 rounded-lg"
        onSelect={() => console.log("Hello 6")}
        placeholder="Hello 6"
      />
    </div>
  );
};
export default Event6;
