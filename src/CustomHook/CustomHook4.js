import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [isFetch, setIsFetch] = useState(false);
  return { isFetch, setIsFetch };
};

const useData = ({ isFetch }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    isFetch &&
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
      });
  }, [isFetch]);
  return { data, setData };
};

const CustomHook4 = () => {
  const { isFetch, setIsFetch } = useFetch();
  const { data } = useData({ isFetch });

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

export default CustomHook4;
