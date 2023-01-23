import React from "react";

const Event3 = () => {
  const hello3 = () => console.log("Hello 3");

  return (
    <div className="m-3">
      <button className="bg-yellow-400 border-2 rounded-lg p-1" onClick={hello3}>
        Button 3
      </button>
    </div>
  );
};

export default Event3;
