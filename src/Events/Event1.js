import React from "react";

const Event1 = () => {
  return (
    <div className="m-3">
      {" "}
      <button
        className="bg-red-400 border-2 rounded-lg p-1"
        onClick={() => console.log("Hello 1")}
      >
        Button 1
      </button>{" "}
    </div>
  );
};

export default Event1;
