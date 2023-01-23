import React from "react";

const Event3 = () => {
  const output = () => console.log("Hello world!");

  return (
    <div className="my-2">
      <button className="bg-green-200" onClick={output}>
        Button 3
      </button>
    </div>
  );
};

export default Event3;
