import React, { useState, useEffect } from "react";
import axios from "axios";
import quizes from "./quizes";

const Trivia1 = () => {
  const [page, setPage] = useState("Main");
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [questionId, setQuestionId] = useState(0);
  const [result, setResult] = useState({ result: [], score: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState([false]);
  const [history, setHistory] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  const updateUsername = (username) => {
    setUsername(username);
  };
  const getHistory = () => {
    const config = {
      method: "post",
      url: "http://localhost:5555/trivia/getGameHistories",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("history", response.data);
        setHistory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getRanking = () => {
    const config = {
      method: "post",
      url: "http://localhost:5555/trivia/getRanking",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("ranking", response.data);
        setRanking(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    username || setUsername("anonymous");
  }, []);
  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);
  useEffect(() => {
    const config = {
      method: "post",
      url: "http://localhost:5555/trivia/getCategories",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("categories", response.data);
        setCategories(
          response.data.map((e) => ({
            id: e.id,
            name: e.name,
          }))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const data = JSON.stringify({
      categoryId: categoryId,
      questionAmount: 4,
      choiceAmount: 3,
    });

    const config = {
      method: "post",
      url: "http://localhost:5555/trivia/getQuestions",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    categoryId &&
      axios(config)
        .then(function (response) {
          console.log("question", response.data);
          setQuestions(response.data);
          setPage("game");
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [categoryId]);
  useEffect(() => {
    setSelectedAnswer(
      questions.map((e) => {
        return false;
      })
    );
  }, [questions]);

  useEffect(() => {
    if (selectedAnswer.findIndex((e) => e === false) === -1) {
      const data = JSON.stringify({
        userName: username,
        categoryId: categoryId,
        answer: questions.map((question, idx) => {
          return {
            questionId: questions[idx].id,
            answerChoiceId: selectedAnswer[idx].id,
          };
        }),
      });

      var config = {
        method: "post",
        url: "http://localhost:5555/trivia/submitAnswer",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          setResult(response.data);
          setTimeout(() => {
            setPage("result");
          }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [selectedAnswer]);

  return (
    <div className="font-kanit">
      {page === "Main" && (
        <div className="box-border flex flex-col items-center">
          <p className="my-10 text-2xl">เลือกหมวด</p>
          <div className="flex w-10/12 flex-col items-start rounded-md bg-slate-100 p-6">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className="my-2 w-full bg-slate-200 p-2"
                onClick={() => setCategoryId(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="mt-4 w-10/12 rounded-md bg-slate-100 p-6">
            <button
              onClick={() => {
                getHistory();
                getRanking();
                setPage("History");
              }}
              className="my-2 w-full bg-slate-200 p-2"
            >
              ประวัติการเล่น
            </button>
            <button
              onClick={() => setPage("User")}
              className="my-2 w-full bg-slate-200 p-2"
            >
              ตั้งค่าผู้เล่น
            </button>
          </div>
        </div>
      )}
      {page === "game" && (
        <div className="mx-10 my-5 flex flex-col justify-center font-kanit">
          <p className="mx-auto my-4 text-xl font-bold">
            หมวด {questions[0].category}
          </p>
          <div className="mx-auto flex w-11/12 text-xl font-bold">
            <p>
              ข้อ {questionId + 1} / {questions.length}
            </p>{" "}
            <p className="mx-auto">{questions[questionId].question}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xl">
            {questions[questionId].choices.map((r, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (selectedAnswer[questionId] === false) {
                    // setQuestionId(questionId < quizes.length-1 ? questionId + 1 : questionId);
                    selectedAnswer[questionId] = { index: idx, id: r.id };
                    console.log("selectedAnswer :>> ", selectedAnswer);
                    const newSelectedAnswer = [...selectedAnswer];
                    console.log("newSelectedAnswer :>> ", newSelectedAnswer);
                    setSelectedAnswer(newSelectedAnswer);
                  }
                }}
                className={`rounded-lg py-4 duration-300 
            ${
              selectedAnswer[questionId] !== false &&
              selectedAnswer[questionId]?.index === idx
                ? "bg-amber-300"
                : "bg-blue-400"
            }`}
              >
                {idx + 1}. {r.choice}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => {
                setQuestionId(questionId - 1);
              }}
              className={`rounded-lg px-4 ${
                questionId >= 1
                  ? "bg-green-400"
                  : "pointer-events-none bg-gray-400"
              }`}
            >
              &lt;
            </button>
            <button
              onClick={() => setQuestionId(questionId + 1)}
              className={`rounded-lg px-4 ${
                questionId < questions.length - 1
                  ? selectedAnswer[questionId] !== false
                    ? "bg-green-400"
                    : "pointer-events-none bg-gray-400"
                  : "pointer-events-none bg-gray-400"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
      {page === "result" && (
        <div className="my-10 mx-auto flex w-10/12 flex-col rounded-md bg-gray-100 p-8 shadow-lg">
          <p className="text-center">
            ตอบถูก {result.score}/{result.result.length} ข้อ ได้ {result.score}{" "}
            คะแนน
          </p>
          {result.result.map((e, idx) => (
            <p>
              ข้อ {idx + 1} : {e.correct === true ? "ถูก" : "ผิด"}
            </p>
          ))}
          <button
            onClick={() => {
              setPage("Main");
              setCategoryId();
              setQuestionId(0);
            }}
            className="mx-auto w-32 rounded-lg bg-white p-4 shadow-md hover:bg-slate-50 active:bg-slate-100"
          >
            กลับหน้าหลัก
          </button>
        </div>
      )}
      {page === "History" && (
        <div className="my-8 mx-auto flex w-11/12 flex-col rounded-lg bg-slate-100 p-4 shadow-lg">
          <p className="my-2 text-center text-xl font-bold">ประวัติการเล่น</p>
          <div className="mb-4 overflow-hidden rounded-lg bg-slate-200 outline outline-1 outline-slate-100">
            <div className="flex w-full border p-2 text-center">
              <div className="w-1/4">ชื่อผู้เล่น</div>
              <div className="w-1/4">หมวด</div>
              <div className="w-1/4">คะแนน</div>
              <div className="w-1/4">วันที่</div>
            </div>
            <div
              className="no-scrollbar max-h-[300px] w-full overflow-scroll rounded-b-md text-center font-light
        outline outline-1 outline-slate-100"
            >
              {history.map((e) => (
                <div className="flex ">
                  <div className="w-1/4">{e.user.name}</div>
                  <div className="w-1/4">{e.category.name}</div>
                  <div className="w-1/4">{e.score}</div>
                  <div className="w-1/4">
                    {new Date(e.createdAt.split("T")[0]).toLocaleDateString(
                      "TH"
                    )}{" "}
                    - {new Date(e.createdAt).toLocaleTimeString("TH")}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="my-2 text-center text-xl font-bold">Ranking</p>
          <div className="mb-4 overflow-hidden rounded-lg bg-slate-200 outline outline-1 outline-slate-100">
            <div className="flex w-full border p-2 text-center">
              <div className="w-1/3">User Id</div>
              <div className="w-1/3">ชื่อผู้เล่น</div>
              <div className="w-1/3">คะแนนสูงสุด</div>
            </div>
            <div
              className="no-scrollbar max-h-[300px] w-full overflow-scroll rounded-b-md text-center font-light
        outline outline-1 outline-slate-100"
            >
              {ranking.map((e) => (
                <div className="flex ">
                  <div className="w-1/3">{e.id}</div>
                  <div className="w-1/3">{e.name}</div>
                  <div className="w-1/3">{e.bestScore}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setPage("Main");
            }}
            className="mx-auto w-32 rounded-lg bg-white p-4 shadow-md 
            hover:bg-slate-50 active:bg-slate-100"
          >
            กลับหน้าหลัก
          </button>
        </div>
      )}
      {page === "User" && (
        <div
          className="my-8 mx-auto flex w-11/12 flex-col items-center rounded-lg
        bg-slate-100 p-4 shadow-lg"
        >
          <p className="my-4 text-center text-2xl">ตั้งค่าผู้เล่น</p>
          <p>Username : {username}</p>
          <form
            className="mt-4 flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("e.target.value", e.target[0].value);
              updateUsername(
                e.target[0].value !== "" ? e.target[0].value : "anonymous"
              );
            }}
          >
            <label>
              Username
              <input
                placeholder="กรอกชื่อผู้เล่น"
                className="mx-2 rounded-md p-2 text-center"
              ></input>
            </label>
            <div className="mt-8 flex w-full justify-center space-x-4">
              <button
                type="submit"
                className="mx-auto  w-32 rounded-lg bg-white p-4 
            shadow-md hover:bg-slate-50 active:bg-slate-100"
              >
                ยืนยัน
              </button>
              <button
                type="button"
                onClick={() => {
                  setPage("Main");
                }}
                className="mx-auto w-32 rounded-lg bg-white p-4 shadow-md 
            hover:bg-slate-50 active:bg-slate-100"
              >
                กลับหน้าหลัก
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default Trivia1;
