import React from "react";

const Event1 = () => {
  const helloWorld = () => console.log("Hello 2");
  return (
    <div className="my-2">
      <button className="bg-red-200" onClick={() => helloWorld()}>
        Button 2
      </button>
    </div>
  );
};

export default Event1;