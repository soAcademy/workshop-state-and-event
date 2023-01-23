import React from "react";

const Event4 = () => {
  const inputChange = (e) => console.log(e.target.value);

  return (
    <div className="my-2">
      <input className="border-2 border-red-200" onChange={(e) => inputChange(e)} />
    </div>
  );
};

export default Event4;
