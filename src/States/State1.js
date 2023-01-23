import React, { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Bin");
  return (
    <div className="bg-blue-200">
      <h1>{title}</h1>
      <button className="bg-red-200 rounded-lg p-2 m-2" onClick={() => setTitle("Jam")}>
        
        Change Name
      </button>
    </div>
  );
  
};

export default State1;
