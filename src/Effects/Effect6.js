import { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState("");
  const [isFetch, setFetch] = useState(false);

  useEffect(() => {
    isFetch &&
      axios({
        method: "GET",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
      });
  }, [isFetch]);

  return (
    <>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setFetch(true)}
      >
        Fetch
      </button>
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
};

export default Effect6;
