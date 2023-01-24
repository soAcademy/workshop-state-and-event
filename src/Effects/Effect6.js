import axios from "axios";
import React, { useState, useEffect } from "react";

const Effect6 = () => {
  const [data, setData] = useState();
  const fetch = () => {
    setData();
    axios({
      method: "get",
      url: `https://api.sampleapis.com/coffee/hot`,
    }).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="p-2 m-2 bg-gray-300 w-1/2 rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold">Effect6: API</p>
        <button
          onClick={fetch}
          className="p-2 m-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
        >
          Fetch
        </button>
      </div>
      <div className="w-full h-[400px] overflow-scroll border-2 border-black">
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default Effect6;
