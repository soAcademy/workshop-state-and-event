import React from "react";

const Event8 = () => {
  const submitData = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  };

  return (
    <div>
      <input
        className="h-12 border border-blue-300 mt-2"
        id="image"
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => submitData(e)}
      />
    </div>
  );
};

export default Event8;
