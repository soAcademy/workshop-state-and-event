import React from "react";

function Event3() {
  const helloWorld = () => console.log("hi 3!");

  return (
    <div className="my-2">
      <button className="bg-green-200" onClick={helloWorld}>
        Button 3
      </button>
    </div>
  );
}

export default Event3;
