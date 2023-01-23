import React from "react";

const Event1 = () => {
  return (
    <div className="my-2">
      <button className="bg-red-200" onClick={() => console.log("Hello 1")}>
        button 1
      </button>
    </div>
  );
};

export default Event1;