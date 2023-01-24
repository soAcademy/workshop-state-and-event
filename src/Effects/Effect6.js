import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    if (isFetch) {
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((r) => {
        console.log(r);
        setData(r);
      });
    }
  }, [isFetch]);

  return (
    <>
      <button className="bg-blue-300" onClick={() => setIsFetch(true)}>
        Fetch
      </button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Effect6;
