import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  // const [data, setData] = useState("");
  const [manus, setManus] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response);
      // setData(response);
      setManus(response.data);
    });
  }, []);

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg">
      {/* <p className="my-2 px-2">{JSON.stringify(data)}</p> */}
      {manus?.map((r) => <div className="my-2 px-2">{r.title}</div>)}
    </div>
  );
};

export default Effect5;
