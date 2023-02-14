import React, { useState, useEffect } from "react";
import axios from "axios";

//Create Hook
const useData = () => {
  const [data, setData] = useState("");
  return {
    data,
    setData,
  };
};

const useFetch = ({ setData }) => {
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    isFetch &&
      axios({
        method: 'get',
        url: "https://api.sampleapis.com/coffee/hot",
      }).then((res) => setData(res.data));
  }, [isFetch]);
  return {
    isFetch,
    setIsFetch,
  };
};

//use hook
const CustomHook4 = () => {
  const { data, setData } = useData();
  const { setIsFetch } = useFetch({setData});
  return (
    <>
      <button onClick={() => setIsFetch(true)} className="bg-red-300 p-4 w-1/2">
        Fetch
      </button>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};
export default CustomHook4;
