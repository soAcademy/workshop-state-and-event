import React, { useState, useEffect } from "react";
import axios from "axios";
const Effect6 = () => {
  const [data, setData] = useState("");
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    if (isFetch) {
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((res) => {
        console.log(res);
        setData(res);
      });
    }
  }, [isFetch]);

  return (
    <>
      
      {JSON.stringify(data)}
      <button className="bg-red-200 h-[50px] w-[100px]" onClick={() => setIsFetch(true)}>
        Fetch
      </button>
    </>
  );
};
export default Effect6;
