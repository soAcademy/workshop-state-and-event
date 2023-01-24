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
      {/* <p>{JSON.stringify(data)}</p> */}
      {
        data !== "" && data.data.map((r) => <div className="bg-red-300 mt-1">{r.id} . {r.title}</div>)
      }
    </>
  );
};

export default Effect5;
