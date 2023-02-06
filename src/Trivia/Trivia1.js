import quizes from "./quizes";
import { useState } from "react";

const Trivia1 = () => {
  const [question, setQuestion] = useState(0)
  const [score, setScore] = useState(0)
  return (
    <div className="m-10 flex flex-col justify-center">
      <div className="mx-auto">Question</div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {[...Array(4).keys()].map((r, idx) => (
          <button key={idx} className="bg-blue-400 py-4">
            {r + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Trivia1;
