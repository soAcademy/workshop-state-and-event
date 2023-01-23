import React from "react";

const event4 = () => {
  const inputChange = (e) => console.log(e.target.value);
  return (
    <div className="my-2">
      <input className="border-2 bg-red-200" onChange={(e) => inputChange(e)}>
      </input>
    </div>
  );
};

export default event4;
