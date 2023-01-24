import { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [hiText, setHiText] = useState("Hola");

  useEffect(() => {
    light1 && light2 ? setHiText("Hello") : setHiText("Hola");
  }, [light1, light2]);

  return (
    <>
      <div>{hiText}</div>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        onClick={() => setLight1(!light1)}
      >
        {light1 ? "ON" : "OFF"}
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setLight2(!light2)}
      >
        {light2 ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default Effect7;
