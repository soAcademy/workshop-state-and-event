import { useState } from "react";

const State1 = () => {
  const [title, setTitle] = useState("Max");

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{title}</p>
        <button
          type="button"
          className="bg-red-200 rounded-lg shadow-md p-2 mt-4"
          onClick={() => setTitle("Max222222222")}
        >
          Don't CLICK!
        </button>
      </div>
    </div>
  );
};

export default State1;
