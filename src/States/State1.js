import React, { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Born");

  return (
    <div className="bg-yellow-200">
      <p>{title}</p>
      <p>
        <button
          className="p-4 bg-red-200 border border-red-600"
          onClick={() => setTitle("Jam")}
        >
          Change Name
        </button>
      </p>
    </div>
  );
};

export default State1;
