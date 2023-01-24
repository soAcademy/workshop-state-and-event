import React, { useState, useEffect } from "react";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [result, setResult] = useState("Hola");

  useEffect(() => {
    const word = light1 && light2 ? "Hello" : "Hola";
    console.log(light1, light2);
    setResult(word);
  }, [light1, light2]);

  return (
    <div className="bg-gray-300 rounded-lg p-2 m-2 w-fit flex flex-col items-center font-bold">
      Effect 7 : Light Switches
      <div>
        <button
          onClick={() => setLight1(!light1)}
          className={`p-2 m-2 ${
            light1 ? "bg-white" : "bg-black text-white"
          } font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500`}
        >
          Light1
        </button>
        <button
          onClick={() => setLight2(!light2)}
          className={`p-2 m-2 ${
            light2 ? "bg-white" : "bg-black text-white"
          } font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500`}
        >
          Light2
        </button>
      </div>
        <div className="bg-blue-500 rounded px-2">{result}</div>
    </div>
  );
};

export default Effect7;
