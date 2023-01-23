import React from "react";

const Event3 = () => {
  const helloWorld = () => console.log("Hello 3");

  return (
    <div className="my-2">
      <button className="bg-yellow-200" onClick={helloWorld}>
        button3
      </button>
    </div>
  );
};

export default Event3;
