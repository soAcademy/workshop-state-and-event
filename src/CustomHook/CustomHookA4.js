import React, { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
  const [data, setData] = useState("");
  return {
    data,
    setData,
  };
};

const useFetch = ({setData}) => {
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    isFetch &&
      axios({
        method: "get",
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((response) => {
        console.log(response);
        setData(response);
      });
  },[isFetch]);

  return { isFetch, setIsFetch };
};

const CustomHookA4 = () => {
    const { data, setData } = useData();
    const { setIsFetch } = useFetch({ setData });
  
    return (
      <>
        <p>
          <button
            className="bg-sky-400 p-4 w-24 rounded-xl"
            onClick={() => setIsFetch(true)}
          >
            Fetch
          </button>
        </p>
        <p>{JSON.stringify(data)}</p>
      </>
    );
  };
  
  export default CustomHookA4;