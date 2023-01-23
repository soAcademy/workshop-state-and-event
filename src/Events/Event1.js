import React from "react";
const Event1 = () => {
  return (
    <div className="m-3">
      {" "}
      <button
        className="bg-cyan-300 border-2 rounded-lg"
        onClick={() => console.log("Hello 1")}
      >
        Button
      </button>{" "}
    </div>
  );
};
export default Event1;
