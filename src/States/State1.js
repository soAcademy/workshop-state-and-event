import React from "react";
import { useState } from "react";

const State1 = () => {
  const [name, setName] = useState("boeing");

  return (
    <div className="bg-sky-200">
      <p>{name}</p>
      <p>
        <button
          className="p-4 bg-green-400 rounded-[10px] mr-4"
          onClick={() => setName("mike")}
        >
          Change mike
        </button>
        <button
          className="p-4 bg-green-400 rounded-[10px]"
          onClick={() => setName("boeing")}
        >
          Change boeing
        </button>
      </p>
    </div>
  );
};

export default State1;
