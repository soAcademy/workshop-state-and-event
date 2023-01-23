import React from "react";

const Event2 = () => {
  const hello2 = () => console.log("Hello 2");

  return (
    <div className="m-3">
      <button
        className="bg-orange-400 border-2 rounded-lg p-1"
        onClick={() => hello2()}
      >
        Button 2
      </button>
    </div>
  );
};

export default Event2;
