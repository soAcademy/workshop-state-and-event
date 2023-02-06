import React from "react";

const Trivia1 = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4 text-xl">
        <p>ข้อ 1/10</p>
      </div>
      <div className="text-center text-lg mb-4">
        <p>คะแนน 0</p>
      </div>
      <div className="text-lg mb-4">
        <p>คำถาม :</p>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {[...Array(4).keys()].map((r, idx) => (
          <button key={idx} className="bg-cyan-400 rounded active:bg-cyan-200">
            {r}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trivia1;
