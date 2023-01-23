import React from "react";

const Event4 = () => {
  const change = (e) => console.log(e.target.value);

  return (
    <div className="my-2">
      <input className="bg-red-200" onChange={(e) => change(e)}></input>
    </div>
  );
};
export default Event4;
