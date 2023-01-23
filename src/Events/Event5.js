import React from "react";

const Event5 = () => {
  return (
    <div className="my-2">
      <div className="bg-red-300" onMouseOver={() => console.log("Hover")}>
        Hover
      </div>
    </div>
  );
};

export default Event5;
