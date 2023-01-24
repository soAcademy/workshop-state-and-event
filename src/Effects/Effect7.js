import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect7 = () => {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
 const [result, setResult] = useState('')

  useEffect(() => {
    // if (light1 === true && light2 === true) {
    //   setResult('Hello')
    // } else {
    //   setResult('Hola')
    // }

    setResult((light1 && light2? 'Hello':'Hola'))

  }, [light1, light2]);

  return (
    <>
      {light1?  <p>light1:true</p>: <p>light1:false</p>}
      {light2 && <p>light2:true</p>}
      {!light2 && <p>light2:false</p>}

      <p>{result}</p>

      {/* {light1 && light2 ? <p>Hello</p> : <p>Hola</p>} */}

      <p>{light1}</p>
      <button
        onClick={() => {
          setLight1(!light1);
        }}
      >
        Light 1
      </button>

      <button
        onClick={() => {
          setLight2(!light2);
        }}
      >
        Light 2
      </button>
    </>
  );
};

export default Effect7;
