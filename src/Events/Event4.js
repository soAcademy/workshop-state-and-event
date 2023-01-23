import React from "react";

const Event4 = () => {
  const output = (e) => console.log(e.target.value);

  return (
    <div className="m-2">
      <input className="border-2 border-red-200" onChange={(e)=>output(e)}/>
    </div>
  );
};

export default Event4;
