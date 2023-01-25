import React from "react";

const Event4 = () => {
  const change = (e) => console.log(e.target.value);

  return (
    <div className="my-2">
      <input className="border-red-700 rounded-lg" onChange={(e) => change(e)}></input>
    </div>
  );
};
export default Event4;
