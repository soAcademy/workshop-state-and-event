import React, { useState, useEffect } from "react";
import axios from "axios";
const Effect6 = () => {
  const [data, setData] = useState("");
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    fetch &&
      axios({
        method: "get",
        url: `https://api.sampleapis.com/coffee/hot`,
      }).then((response) => {
        console.log(response); 
        setData(response);
      });
  }, [fetch]);

  return (
    <>
      <p>
        <button
          className="bg-red-200 rounded-lg m-2 p-2"
          onClick={() => setFetch(true)}
        >
          Fetch
        </button>
      </p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Effect6;
