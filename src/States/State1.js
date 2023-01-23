import React, { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Title");
  return (
    <div className="m-3 bg-red-400 rounded-lg">
      <h1 className="text-2xl p-2 mt-2">{title}</h1>
      <button
        onClick={() => setTitle("setTitle")}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Change setTitle
      </button>
      <button
        onClick={() => setTitle("Title")}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Change Title
      </button>
    </div>
  );
};

export default State1;
