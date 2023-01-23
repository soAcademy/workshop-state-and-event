import { useState } from "react";

const State3 = () => {
  const [res, setRes] = useState(10);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="flex items-center m-2">
        <button
          type="button"
          className="bg-red-200 rounded-lg shadow-md active:bg-red-300 active:shadow-lg p-2"
          onClick={() => setRes(res - 1)}
        >
          Click - 1
        </button>
        <div className="w-[20px] mx-5">
          <p className="text-center">{res}</p>
        </div>
        <button
          type="button"
          className="bg-green-200 rounded-lg shadow-md active:bg-green-300 active:shadow-lg p-2"
          onClick={() => setRes(res + 1)}
        >
          Click + 1
        </button>
      </div>
    </div>
  );
};

export default State3;
