import { useEffect, useState } from "react";
import axios from "axios";

const Question = ({ question, user, setUser }) => {
  console.log("questionData", question);
  const [toggles, setToggles] = useState(
    [...Array(question.length)].map((r) => true)
  );
  const [choice, setChoice] = useState([]);
  const [scoreToggle, setScoreToggle] = useState(false);
  const [score, setScore] = useState([]);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);

  const chooseAnswer = (answer, choiceId) => {
    console.log("choose answer,choiceId:", answer, choiceId);

    const findQuestion = question.map((r) => {
      return {
        id: r.id,
        question: r.question,
        answer: r.answerId,
        choice: r.choice.filter((c) => c.choiceId === choiceId),
      };
    });
    console.log("findQuestion", findQuestion);
    const questionIs = findQuestion.filter((r) => r.choice.length !== 0);
    console.log("questionIs", questionIs);

    const result = {
      questionId: questionIs[0].id,
      question: questionIs[0].question,
      chooseChoiceId: answer.choiceId,
      answerChoiceId: questionIs[0].answer,
    };
    console.log("result", result);

    return setChoice(result);
  };
  console.log("choice>>>>>>", choice);

  const openQuestion = (index) => {
    const newToggle = [...toggles];
    newToggle[index] = !newToggle[index];
    if (index + 1 === toggles.length) {
      setToggles(newToggle.map(() => false));
      setButtonToggle(true);
    } else {
      setToggles(newToggle);
    }
  };

  useEffect(() => {
    const _prepareData = JSON.stringify({
      user: user,
      score: choice.chooseChoiceId === choice.answerChoiceId ? 1 : 0,
      id: choice.questionId,
      choiceId: choice.chooseChoiceId,
      answerChoiceId: choice.answerChoiceId,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/quizeGame/submitAnswerHandler",
      headers: {
        "Content-Type": "application/json",
      },
      data: _prepareData,
    };
    axios(config).then((res) => res.data);
  }, [choice]);

  console.log(toggles);

  //Get Score
  useEffect(() => {
    const data = JSON.stringify({
      user: user,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/quizeGame/getScoreByUserHandler",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config).then((res) => {
      console.log("response", res.data);
      setScore(res.data);
    });
  }, [scoreToggle]);
  console.log("score", score);

  //Calculate score
  const finalScore = score.reduce((acc, r) => acc + r.score, 0);
  console.log("finalScore", finalScore);

  //Clear user data

  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/quizeGame/clearUserDataHandler",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {currentQuiz < question.length && (
        <div className="bg-slate-600 h-screen">
          <div className="font-bold font-kanit text-2xl text-center pt-5 text-white">
            {currentQuiz + 1}. {question[currentQuiz].question}
          </div>

          <div className=" w-full text-center space-y-4 mx-auto font-kanit">
            {question[currentQuiz].choice.map((choice) => (
              <div
                className="w-[90%] px-4 mx-auto bg-red-200 text-xl p-2 mt-2 rounded-lg"
                onClick={() => {
                  chooseAnswer(choice, choice.choiceId);
                  setCurrentQuiz(currentQuiz + 1);
                }}
              >
                {choice.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-500">
        <div className="bg-slate-500 h-screen w-full font-kanit py-5 text-center">
          <div className="w-1/2 mx-auto">
            {currentQuiz === question.length && (
              <button
                className=" bg-teal-200 p-2 w-full rounded-lg"
                onClick={() => {
                  setScoreToggle(true);
                  setCurrentQuiz(currentQuiz + 1);
                }}
              >
                ดูคะแนน
              </button>
            )}
          </div>
        </div>
        {scoreToggle && (
          <div className="text-center bg-slate-500 fixed top-[20%] w-full text-white font-kanit">
            <div className="text-4xl font-bold">{user}</div>{" "}
            <div className="text-2xl font-bold">
              Score:{finalScore}/{score?.length}
            </div>
            <div className="w-full">
              <div className="mx-auto">
                <img src="doreamon555.png" className=" " />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Question;
