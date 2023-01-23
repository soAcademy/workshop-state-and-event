import React from "react";
import { useState } from "react";

const State1 = () => {
  const [name, setName] = useState("boeing");

  return (
    <div className="bg-sky-200">
      <p>{name}</p>
      <p>
        <button className="p-4 bg-green-200" onClick={() => setName("mike")}>
          Change name
        </button>
      </p>
    </div>
  );
};

export default State1;
