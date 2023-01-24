import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);
  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Effect5;
