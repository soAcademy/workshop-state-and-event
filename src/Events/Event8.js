import React from "react";

const Event8 = () => {
  const picData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="m-3">
      <input
        id="image"
        type="file"
        accept="image/jpg, image/png"
        className="h-12 border-2 border-violet-500 rounded-lg"
        onChange={(e) => picData(e)}
      />
    </div>
  );
};

export default Event8;
