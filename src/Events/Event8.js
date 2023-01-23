import React from "react";

function Event8() {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <input
        className="h-12 border border-blue-500 mt-2 bg-blue-500 text-white p-4 rounded-[10px] shadow-lg"
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        onChange={(event) => submitData(event)}
      />
    </div>
  );
}

export default Event8;
