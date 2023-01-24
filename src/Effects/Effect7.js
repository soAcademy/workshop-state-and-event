import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [text, setText] = useState("Hi");

  useEffect(() => {
    light1 && light2 ? setText("Hello") : setText("Hola");
  }, [light1, light2]);

  return (
    <>
      <p>{text}</p>
      <button className="bg-red-200 p-2 m-2" onClick={() => setLight1(!light1)}>
        {light1 ? "ON" : "OFF"}
      </button>
      <button className="bg-red-200 p-2 m-2" onClick={() => setLight2(!light2)}>
        {light2 ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default Effect7;
