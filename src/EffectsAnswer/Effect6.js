import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState("");
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    isFetch &&
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
        setIsFetch(false);
        // useState ถ้าเรา set ค่าเดิมไปใหม่ มันจะไม่ render ให้
      });
  }, [isFetch]);

  return (
    <>
      <p>
        <button
          className="bg-red-300 p-4 w-24"
          onClick={() => setIsFetch(true)}
        >
          Fetch
        </button>
      </p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Effect6;
