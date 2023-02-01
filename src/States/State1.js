import React, { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Bin");
  console.log("Title:",title);
  console.log("setTitle:",setTitle);

  return (
    <div className="bg-red-200">
      <p>{title}</p>
      <p>
        <button className="p-4 bg-blue-200" onClick={() => setTitle("Jan")}>
          Change Title
        </button>
      </p>
    </div>
  );
};

export default State1;
