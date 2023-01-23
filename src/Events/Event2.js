import React from "react";

const Event2 = () => {
  const hello2 = () => console.log("Hello 2");

  return (
    <div className="m-3">
      <button
        className="bg-cyan-300 border-2 rounded-lg"
        onClick={() => hello2()}
      >
        Button 2
      </button>
    </div>
  );
};

export default Event2;
