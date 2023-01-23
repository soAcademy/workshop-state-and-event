import { useState } from "react";

const State5 = () => {
  const [data, setData] = useState({ name: "Bin", location: "Bangkok" });

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="text-center m-2">
        <p className="bg-green-50 border-2 border-green-200 rounded-lg mb-2 p-2">
          {data.name}
        </p>
        <p className="bg-green-50 border-2 border-green-200 rounded-lg mb-2 p-2">
          {data.location}
        </p>

        <p className="bg-green-50 border-2 border-green-200 rounded-lg mb-2 p-2">
          {JSON.stringify(data)}
        </p>
        <button
          type="button"
          className="w-full bg-red-200 rounded-lg shadow-md active:bg-red-300 active:shadow-lg mb-2 p-2"
          onClick={() => setData({ name: "Jam", location: "Nonthaburi" })}
        >
          Don't CLICK!
        </button>
      </div>
    </div>
  );
};

export default State5;
