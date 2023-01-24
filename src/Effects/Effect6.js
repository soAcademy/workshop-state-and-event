import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState("");
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    fetch &&
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
      });
  }, [fetch]);

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg">
      <div>
        <button
          type="button"
          onClick={() => setFetch(true)}
          className="bg-green-300 rounded w-1/12 p-2 ml-3 mt-2"
        >
          Fetch
        </button>
      </div>
      <div className="my-2 px-2">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Effect6;
