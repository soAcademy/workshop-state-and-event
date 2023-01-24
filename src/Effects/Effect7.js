import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [greeting, setGreeting] = useState("Hola");

  useEffect(() => {
    if (light1 && light2) {
      setGreeting("Hello");
    } else {
      setGreeting("Hola");
    }
  }, [light1, light2]);

  const handleLight1Click = () => setLight1(!light1);
  const handleLight2Click = () => setLight2(!light2);

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg">
      <button
        type="button"
        className="bg-green-300 rounded w-1/12 p-2 ml-3 mt-2"
        onClick={handleLight1Click}
      >
        {light1 ? "ON" : "OFF"}
      </button>
      <button
        type="button"
        className="bg-green-300 rounded w-1/12 p-2 ml-3 mt-2"
        onClick={handleLight2Click}
      >
        {light2 ? "ON" : "OFF"}
      </button>
      <p className="text-xl font-semibold pl-4 mb-2 mt-2">{greeting}</p>
    </div>
  );
};

export default Effect7;

