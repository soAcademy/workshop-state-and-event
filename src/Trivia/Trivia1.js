import quizes from "./quizes";
import { useState } from "react";

const Trivia1 = () => {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setselectedAnswer] = useState(quizes.map(e=>{
    return false
  }))
  return (
    <div className="m-10 flex flex-col justify-center">
      <div className="mx-auto w-10/12 flex">
        <p>
          ข้อ {questionId + 1} / {quizes.length}
        </p>{" "}
        <p className="mx-auto">{quizes[questionId].question}</p>
        <p>คะแนน {score} / {quizes.length}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {quizes[questionId].answers.map((r, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (selectedAnswer[questionId] === false) {
              setQuestionId(questionId < quizes.length-1 ? questionId + 1 : questionId);
              setScore(quizes[questionId].answer === idx ? score + 1 : score);
              selectedAnswer[questionId] = idx
              const newselectedAnswer = [...selectedAnswer]
              setselectedAnswer(newselectedAnswer)
              }
            }}
            className="bg-blue-400 py-4 rounded-lg "
          >
            {idx + 1}. {r}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Trivia1;
