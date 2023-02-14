import { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
  const [data, setData] = useState("");

  return { data, setData };
};

const useFetch = ({ setData }) => {
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

  return { isFetch, setFetch };
};

const CustomHook4 = () => {
  // const [data, setData] = useState("");
  // const [isFetch, setFetch] = useState(false);

  // useEffect(() => {
  //   isFetch &&
  //     axios({
  //       method: "GET",
  //       url: "https://api.sampleapis.com/coffee/hot",
  //     }).then((response) => {
  //       console.log(response);
  //       setData(response);
  //     });
  // }, [isFetch]);

  const { data, setData } = useData();

  const { setFetch } = useFetch({ setData });

  return (
    <>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setFetch(true)}
      >
        Fetch
      </button>
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
};

export default CustomHook4;
