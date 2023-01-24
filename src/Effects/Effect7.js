import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [greeting, setGreeting] = useState("Hola");

  useEffect(() => {
    light1 && light2 ? setGreeting("Hello") : setGreeting("Hola");
  }, [light1, light2]);
  return (
    <>
      <div>{greeting}</div>
      <div>
        <button
          className="bg-green-200 m-2 p-2 rounded-lg"
          onClick={() => setLight1(!light1)}
        >
          {light1 ? "ON" : "OFF"}
        </button>
      </div>
      <div>
        <button
          className="bg-red-200 m-2 p-2 rounded-lg"
          onClick={() => setLight2(!light2)}
        >
          {light2 ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
};

export default Effect7;
