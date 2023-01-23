import React from "react";

const Event2 = () => {
  const output = () => console.log("Hello world!");
  return (
    <div className="ml-2">
      <button className="bg-green-200" onClick={()=>output()}>Button2</button>
    </div>
  )
}

export default Event2;
