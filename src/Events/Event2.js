import React from "react";

function Event2() {
  const Event2 = () => {
    const helloWorld = () => console.log("Hello 222+");
  };
  return (
    <div className="my-2">
      <button className="bg-yellow-200" onClick={() => helloWorld()}>
        Button 2
      </button>
    </div>
  );
}

export default Event2;
