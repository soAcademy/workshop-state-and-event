import React from "react";

const Event2 = () => {
  const helloWorld = () => console.log("Hello 2");

  return (
    <div className="wp-2">
      <button className="bg-blue-200" onClick={() => helloWorld()}>
        Button 2
      </button>
    </div>
  );
};

export default Event2;