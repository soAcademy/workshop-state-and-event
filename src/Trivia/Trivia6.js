import React, { useState, useEffect } from "react";
import axios from "axios";

const Trivia6 = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizes, setQuizes] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [chooseCategoryId, setChooseCategoryId] = useState();
  const [answer, setAnswer] = useState([]);
  const [scoreReturn, setScoreReturn] = useState();
  const [results, setResults] = useState();

  // console.log("quizes", quizes);
  // console.log("currentQuiz", currentQuiz);
  // console.log("chooseCategoryId", chooseCategoryId);
  // console.log("quizName", quizes[currentQuiz - 1]?.quizName);
  // console.log("quizeslength", quizes?.length);
  // console.log("TriviaChoice", quizes[currentQuiz - 1]?.TriviaChoice);
  console.log("answer", answer);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3100/function/getCategoryTrivia",
    }).then((res) => {
      console.log("QuizCategory", res.data);
      setCategoryList(res.data);
    });

    axios({
      method: "post",
      url: "http://localhost:3100/function/getResultsTrivia",
    }).then((res) => {
      console.log("getResults", res.data);
      setResults(res.data);
    });
  }, []);

  useEffect(() => {
    const data = { categoryId: chooseCategoryId };
    axios({
      method: "post",
      url: "http://localhost:3100/function/getQuizTrivia",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then((res) => {
      console.log("Quizes", res.data);
      setQuizes(res.data);
    });
  }, [chooseCategoryId]);

  const submitQuiz = (playerChooseChoice) => {
    const _ans = [
      ...answer,
      {
        quizId: quizes[currentQuiz - 1]?.id,
        playerChooseChoice: playerChooseChoice,
      },
    ];
    setAnswer(_ans);

    currentQuiz === quizes.length &&
      axios({
        method: "post",
        url: "http://localhost:3100/function/submitQuizTrivia",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          categoryId: chooseCategoryId,
          TriviaRoundQuiz: answer,
        },
      }).then((res) => {
        console.log("ScoreReturn", res.data);
        setScoreReturn(res.data.score);
      });
  };

  return (
    <>
      {currentQuiz === 0 && (
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold">เลือกหัวข้อสำหรับเล่นเกมส์</h1>
          {categoryList?.map((r, idx) => (
            <div
              className="m-4 bg-yellow-200 rounded text-2xl w-1/2 mx-auto cursor-pointer"
              onClick={() => {
                setChooseCategoryId(r.id);
                setCurrentQuiz(currentQuiz + 1);
              }}
            >
              {r.categoryName}
            </div>
          ))}
          <div>
            <h1 className="text-bold text-2xl">Leaderboard</h1>
            {results?.map((r, idx) => (
              <div>
                RANK {idx + 1} : {r.score} POINTS
              </div>
            ))}
          </div>
        </div>
      )}

      {currentQuiz <= quizes?.length && currentQuiz > 0 && (
        <>
          <div className="text-center mt-2">
            ข้อ{currentQuiz}/{quizes?.length}
          </div>
          <div className="text-center">{quizes[currentQuiz - 1]?.quizName}</div>
          <div className="grid grid-cols-2 gap-2 text-center mx-2">
            {quizes[currentQuiz - 1]?.TriviaChoice?.map((r, idx) => (
              <button
                className="bg-blue-300 rounded p-4 mt-4"
                onClick={() => {
                  submitQuiz(r.id);
                  setCurrentQuiz(currentQuiz + 1);
                }}
              >
                {r.choiceName}
              </button>
            ))}
          </div>
        </>
      )}
      {currentQuiz > quizes.length && (
        <div>
          <div className="mt-4 text-center bg-yellow-300">
            สรุปคะแนนรวม : {scoreReturn}
          </div>
          <div className="text-center mt-6">
            <button
              className="underline"
              onClick={() => {
                setCurrentQuiz(0);
                setAnswer([]);
              }}
            >
              เริ่มเกมส์ใหม่
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Trivia6;
