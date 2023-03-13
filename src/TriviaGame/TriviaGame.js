import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrophy, FaCog, FaArrowAltCircleLeft } from "react-icons/fa";

export const TriviaGame = () => {
  const [frame, setFrame] = useState("name"); //name,category,question,result,record
  const [username, setUsername] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(undefined);
  const [questions, setQuestions] = useState([]);
  const [questionNo, setQuestionNo] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [resultReturn, setResultReturn] = useState({});
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/getCategories",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setCategories(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const getRecords = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/getRounds",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setRecords(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const getNewSetting = () => {
      setUsername("");
      setCategories([]);
      setCategorySelected(undefined);
      setQuestions([]);
      setQuestionNo(0);
      setAnswers([]);
      setResultReturn({});
      setRecords([]);
    };

    frame === "record" && getRecords();
    frame === "category" && getCategories();
    frame === "name" && getNewSetting();
  }, [frame]);

  useEffect(() => {
    categorySelected > 0 && setFrame("question");

    const data = JSON.stringify({
      categoryId: categorySelected,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/triviaGame/getQuestionsByCategory",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setQuestions(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [categorySelected]);

  const setAnswersFunc = (questionNo, answerId) => {
    setAnswers([...answers, answerId]);
    questionNo < 2 ? setQuestionNo(questionNo + 1) : setFrame("result");
  };

  useEffect(() => {
    const getResultFunc = () => {
      const data = JSON.stringify({
        name: username,
        categoryId: categorySelected,
        questions: questions.map((question, idx) => ({
          id: question.id,
          choices: question.choices.map((choice) => ({
            choice: choice.id,
          })),
          select: answers[idx],
        })),
      });

      // console.log(JSON.stringify(data, " ", 2));

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/submitQuiz",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setResultReturn(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    answers.length === 3 &&
      categorySelected !== undefined &&
      frame === "result" &&
      questions.length > 0 &&
      username !== undefined &&
      getResultFunc();
  }, [answers, categorySelected, frame, questions, username]);

  return (
    <div className="w-100 bg-slate-800 font-prompt">
      {frame === "name" && (
        <div className="header absolute w-full top-0 left-0 text-white p-4">
          <div className="w-full flex justify-between">
            <button onClick={() => setFrame("record")}>
              <FaTrophy />
            </button>
            <button>
              <FaCog />
            </button>
          </div>
        </div>
      )}

      {frame === "record" && (
        <div className="header absolute w-full top-0 left-0 text-white p-4">
          <div className="w-full flex justify-start">
            <button onClick={() => setFrame("name")}>
              <FaArrowAltCircleLeft />
            </button>
          </div>
        </div>
      )}

      {frame === "name" && (
        <div className="h-screen flex justify-center items-center">
          <div className="categoryBlock w-full md:w-3/4 lg:w-1/2 text-center p-4">
            <div className="categoryHead text-white text-6xl mb-16">
              TRIVIA GAME
            </div>
            <div className="categoryHead text-white text-2xl mb-4">
              Put Your Name
            </div>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-3/4 rounded-full text-center border mb-4 p-4 px-8"
            />
            <div className="flex justify-center">
              <button
                onClick={() => username !== "" && setFrame("category")}
                className="w-3/4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 px-8"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {frame === "category" && (
        <div className="h-screen flex justify-center items-center">
          <div className="categoryBlock w-full md:w-3/4 lg:w-1/2 p-4">
            <div className="categoryHead text-white text-4xl text-center mb-20">
              Select Category
            </div>
            <div className="categoryLists grid grid-cols-1 gap-4 text-white">
              {categories?.map((r, idx) => (
                <button
                  key={`category_${idx + 1}`}
                  onClick={() => setCategorySelected(r.id)}
                  className="bg-cyan-800 hover:bg-cyan-700 rounded-full p-4"
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {frame === "question" && (
        <div className="h-screen flex justify-center items-center">
          <div className="gameBlock w-full md:w-3/4 lg:w-1/2 p-4">
            <div className="text-center text-xl text-white mb-8">{`${
              categories?.filter((r) => r.id === categorySelected)[0].name
            } ${questionNo + 1} / 3`}</div>
            <div className="questionBlock h-[120px] flex justify-center items-center bg-cyan-600 rounded-md text-xl text-white mb-20 px-8">
              <div className="text-center">
                {questions[questionNo]?.question}
              </div>
            </div>
            <div className="answersBlock grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              {questions[questionNo]?.choices.map((choice, idx) => (
                <button
                  key={`choice_${idx + 1}`}
                  onClick={() => setAnswersFunc(questionNo, choice.id)}
                  className="choice1 bg-cyan-600 hover:bg-cyan-500 rounded-md p-4"
                >
                  {`${idx + 1}. ${choice.answer}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {frame === "result" && (
        <div className="h-screen flex justify-center items-center">
          <div className="gameBlock w-full md:w-1/2 p-4">
            <div className="text-center text-xl text-white mb-8">{`Result: ${
              categories?.filter((r) => r.id === categorySelected)[0].name
            }`}</div>
            <div className="resultBlock flex justify-center text-white">
              <div>
                <div className=" bg-cyan-600 rounded-lg mb-8 p-4">
                  <div className="flex justify-center">
                    <div className="flex flex-col gap-4 mb-8">
                      {resultReturn?.questions?.map((result, idx) => (
                        <div key={`result_${idx + 1}`}>
                          {`${idx + 1}. ${result.answerDetail}`}{" "}
                          {result.result && (
                            <span className="text-green-200">(CORRECT)</span>
                          )}
                          {!result.result && (
                            <span className="text-red-600">(INCORRECT)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="scoreBlock text-center">
                    Your Score're{" "}
                    <span className="text-2xl">{resultReturn.score}</span>{" "}
                    Point(s)
                  </div>
                </div>

                <button
                  onClick={() => setFrame("name")}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 px-8"
                >
                  New Game
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {frame === "record" && (
        <div className="h-screen flex justify-center p-4 pt-12">
          <div className="recordBlock h-full w-full md:w-3/4 lg:w-1/2 p-4">
            <div className="categoryHead text-white text-2xl text-center mb-4">
              Best Player 20 Records
            </div>
            <div className="playerRecord flex justify-center text-white p-4">
              <div className="bg-cyan-600 rounded-lg p-4">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="pb-2 px-2">No.</th>
                      <th className="pb-2 px-2">Player Name</th>
                      <th className="pb-2 px-2">Score</th>
                      <th className="pb-2 px-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((record, idx) => (
                      <tr key={`record_${idx + 1}`} className="text-sm">
                        <td className="text-center px-2">{idx + 1}</td>
                        <td className="text-center px-2">
                          {record.player.name}
                        </td>
                        <td className="text-center px-2">{record.score}</td>
                        <td className="px-2">
                          {record.createdAt.slice(0, 16).replace("T", " ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
