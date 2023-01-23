import { useState } from "react";

const State4 = () => {
  const [inNum, setInNum] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="flex items-center m-2">
        <input
          type="number"
          placeholder="Enter your number"
          className="border-2 rounded-lg p-2"
          onChange={(e) => setInNum(Number(e.target.value))}
          value={inNum}
        />
        <button
          type="button"
          className="bg-green-200 rounded-lg shadow-md active:bg-green-300 active:shadow-lg ml-3 p-2"
          // onClick={() => setInNum(inNum + 7)}
          onClick={() => setRes(inNum + 7)}
        >
          Click + 7
        </button>
        <div className="border-2 rounded-lg ml-3 p-2">
          {/* <p className="text-center">{inNum}</p> */}
          <p className="text-center">{res}</p>
        </div>
      </div>
    </div>
  );
};

export default State4;
