import React from "react";

const Event3 = () => {
  const helloWorld = () => console.log("Hello 3");

  return (
    <div className="my-3">
      <button className="bg-pink-800" onClick={helloWorld}>
        Button 30
      </button>
    </div>
  );
};

export default Event3;