import { useState, useEffect } from "react";
import axios from "axios";

const Effect5 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.sampleapis.com/coffee/hot",
    }).then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);

  return (
    <>
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
};

export default Effect5;
