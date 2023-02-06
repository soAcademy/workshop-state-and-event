import quizes from "./quizes";
import { useState } from "react";

const Trivia1 = () => {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState(
    quizes.map((e) => {
      return false;
    })
  );
  return (
    <div className="m-10 flex flex-col justify-center font-kanit">
      <div className="mx-auto w-11/12 flex text-xl font-bold">
        <p>
          ข้อ {questionId + 1} / {quizes.length}
        </p>{" "}
        <p className="mx-auto">{quizes[questionId].question}</p>
        <p>
          คะแนน {score} / {quizes.length}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 text-xl">
        {quizes[questionId].answers.map((r, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (selectedAnswer[questionId] === false) {
                // setQuestionId(questionId < quizes.length-1 ? questionId + 1 : questionId);
                setScore(quizes[questionId].answer === idx ? score + 1 : score);
                selectedAnswer[questionId] = idx;
                console.log("selectedAnswer :>> ", selectedAnswer);
                const newSelectedAnswer = [...selectedAnswer];
                console.log("newSelectedAnswer :>> ", newSelectedAnswer);

                setselectedAnswer(newSelectedAnswer);
              }
            }}
            className={`py-4 rounded-lg duration-300
            ${
              selectedAnswer[questionId] === idx
                ? quizes[questionId].answer === selectedAnswer[questionId]
                  ? "bg-green-400"
                  : "bg-red-400"
                : selectedAnswer[questionId] !== false &&
                  quizes[questionId].answer === idx
                ? "bg-green-400"
                : "bg-blue-400"
            }`}
          >
            {idx + 1}. {r}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => {
            setQuestionId(questionId - 1);
          }}
          className={`rounded-lg px-4 ${
            questionId >= 1 ? "bg-green-400" : "bg-gray-400 pointer-events-none"
          }`}
        >
          &lt;
        </button>
        <button
          onClick={() => setQuestionId(questionId + 1)}
          className={`rounded-lg px-4 ${
            questionId < quizes.length - 1
              ? "bg-green-400"
              : "bg-gray-400 pointer-events-none"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Trivia1;
