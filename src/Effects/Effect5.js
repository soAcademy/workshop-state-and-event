import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response.data);
      setData(response.data);
    });

  }, []);

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      {
        data?.map((r) => <div className="bg-green-400 mb-2">{r.title}</div>)
      }
    </>
  );
};

export default Effect5;
