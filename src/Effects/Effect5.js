import axios from "axios";
import React, { useState, useEffect } from "react";

const Effect5 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.sampleapis.com/coffee/hot`,
    }).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className="p-2 m-2 bg-gray-300 w-1/2 rounded-lg">
      <p>Effect5: API</p>
      <div className="w-full h-[400px] overflow-scroll border-2 border-black">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Effect5;
