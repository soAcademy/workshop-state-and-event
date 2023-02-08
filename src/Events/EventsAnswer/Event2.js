import React from "react";

const Event2 = () => {
  const helloWorld = (e) => console.log(e);

  return (
    <div className="my-2">
      <button className="bg-yellow-200" onClick={() => helloWorld()}>
        Button 2
      </button>
    </div>
  );
};

export default Event2;
