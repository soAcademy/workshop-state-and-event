import React from "react";

const Event1 = () => {
  return (
    <div className="my-2">
      <button
        className="bg-gray-600 text-primary text-bold-center"
        onClick={() => console.log("Hello 1")}
      >Button 1</button>
    </div>
  );
};

export default Event1;
