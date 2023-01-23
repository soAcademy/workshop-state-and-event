import { useState } from "react";

const State2 = () => {
  const [res, setRes] = useState(0);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{res}</p>
        <button
          type="button"
          className="bg-red-200 rounded-lg shadow-md active:bg-red-300 active:shadow-lg p-2 mt-4"
          onClick={() => setRes(res + 1)}
        >
          Click + 1
        </button>
      </div>
    </div>
  );
};

export default State2;
