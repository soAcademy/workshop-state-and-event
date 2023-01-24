import { useState, useEffect } from "react";
import axios from "axios";

const Effect6 = () => {
  const [data, setData] = useState();
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    isFetch &&
      axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
        // console.log(res);
        setData(res);
      });
  }, [isFetch]);

  return (
    <div className="w-100 p-4">
      <div className="flex justify-center mb-5">
        <button
          onClick={() => setIsFetch(!isFetch)}
          className="bg-red-100 active:bg-red-200 border-2 border-red-200 rounded-lg shadow-md active:shadow-lg m-2 py-2 px-3"
        >
          Don't Click!!!
        </button>
      </div>

      <div className="">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Effect6;
