import React, { useState, useEffect } from "react";
import axios from "axios";

// const CustomHook4 = () => {
//   const [data, setData] = useState("");
//   const [isFetch, setIsFetch] = useState(false);

//   useEffect(() => {
//     isFetch &&
//       axios({
//         method: "get",
//         url: "https://api.sampleapis.com/coffee/hot",
//       }).then((response) => {
//         console.log(response);
//         setData(response);
//       });
//   }, [isFetch]);

//   return (
//     <div className="w-full p-4">
//       <div>
//         <button
//           className="bg-pink-200 p-4 w-24"
//           onClick={() => setIsFetch(true)}
//         >
//           Fetch
//         </button>
//       </div>
//       <div className="flex justify-center mt-5">
//         <div className="border-2 rounded w-4/5">{JSON.stringify(data)}</div>
//       </div>
//     </div>
//   );
// };

const useData = () => {
  const [data, setData] = useState("");
  return {
    data: data,
    setData: setData,
  };
};

const useFetch = ({ setData }) => {
  const [isFetch, setIsFetch] = useState(false);

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
  return { isFetch: isFetch, setIsFetch: setIsFetch };
};

const CustomHook4 = () => {
  const { data, setData } = useData();
  const { setIsFetch } = useFetch({ setData });

  return (
    <div className="w-full p-4">
      <div>
        <button
          className="bg-pink-200 p-4 w-24"
          onClick={() => setIsFetch(true)}
        >
          Fetch
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <div className="border-2 rounded w-4/5">{JSON.stringify(data)}</div>
      </div>
    </div>
  );
};

export default CustomHook4;
