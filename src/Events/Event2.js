import React from "react";

const Event2 = () => {
  const helloWorld = () => console.log("Hello 2");

  return (
    <div className="my-2">
      <button className="bg-yellow-200" onClick={() => helloWorld()}>
        button2
      </button>
    </div>
  );
};

export default Event2;
