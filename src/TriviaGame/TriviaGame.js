import { useState } from "react";
import { FaTrophy, FaCog, FaGamepad, FaSave } from "react-icons/fa";
import {
  useSetPlayerName,
  useFrameName,
  useFrameCategory,
  useFrameQuestion,
  useFrameResult,
  useFrameRound,
  useFrameSetting,
} from "./hooks";

export const TriviaGame = () => {
  const [frame, setFrame] = useState("name"); //name,category,question,result,record,setting,edit

  const { username, setUsername } = useSetPlayerName();
  const { categories, setCategories, categorySelected, setCategorySelected } =
    useFrameCategory({
      frame,
    });
  const {
    questionNo,
    setQuestionNo,
    questions,
    setQuestions,
    answers,
    setAnswers,
    setAnswersFunc,
  } = useFrameQuestion({
    categorySelected,
    setFrame,
  });
  const { resultReturn, setResultReturn } = useFrameResult({
    frame,
    username,
    categorySelected,
    questions,
    answers,
  });
  const { records, setRecords } = useFrameRound({ frame });
  const {
    allQuestions,
    setEditQId,
    tempEdit,
    passTempFunc,
    updateQuestion,
    updateAnswer,
  } = useFrameSetting({
    frame,
    setFrame,
  });
  // eslint-disable-next-line no-empty-pattern
  const {} = useFrameName({
    frame,
    setUsername,
    setCategories,
    setCategorySelected,
    setQuestions,
    setQuestionNo,
    setAnswers,
    setResultReturn,
    setRecords,
  });

  return (
    <div className="w-100 h-full bg-slate-800 font-prompt">
      {frame === "name" && (
        <div className="header absolute w-full top-0 left-0 text-white p-4">
          <div className="w-full flex justify-between">
            <button onClick={() => setFrame("record")}>
              <FaTrophy className="text-2xl" />
            </button>
            <button onClick={() => setFrame("setting")}>
              <FaCog className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      {(frame === "record" || frame === "setting") && (
        <div className="header absolute w-full top-0 left-0 text-white p-4">
          <div className="w-full flex justify-start">
            <button onClick={() => setFrame("name")}>
              <FaGamepad className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      {frame === "edit" && (
        <div className="header absolute w-full top-0 left-0 text-white p-4">
          <div className="w-full flex justify-end">
            <button onClick={() => setFrame("setting")}>
              <FaCog className="text-2xl" />
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

      {frame === "setting" && (
        <div className="h-full flex justify-center p-4 pt-12">
          <div className="h-full w-full md:w-3/4 lg:w-1/2 p-4">
            <div className="text-white text-2xl text-center mb-4">
              Update Question
            </div>
            <div className="flex justify-center text-white p-4">
              <div className="bg-cyan-600 rounded-lg p-4">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="text-center pb-4 px-2">No.</th>
                      <th className="text-center pb-4 px-2">Category</th>
                      <th className="text-center pb-4 px-2">Question</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {allQuestions?.map((question, idx) => (
                      <tr key={`questionEdit_${idx + 1}`}>
                        <td className="text-center align-text-top pb-2 px-2">
                          {idx + 1}
                        </td>
                        <td className="text-center align-text-top pb-2 px-2">
                          {question.category.name}
                        </td>
                        <td className="pb-2 px-2">
                          <button
                            onClick={() => setEditQId(question.id)}
                            className="hover:text-gray-800 text-left rounded-lg"
                          >
                            {question.question}
                          </button>
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

      {frame === "edit" && (
        <div className="h-screen flex justify-center items-center p-4 pt-12">
          <div className="w-full md:w-3/4 lg:w-1/2 p-4">
            <div className="text-white text-2xl text-center mb-4">
              Update Question
            </div>
            <div className="flex justify-center text-sm p-4">
              <div className="w-3/4">
                <div className="flex">
                  <input
                    className="w-11/12 rounded-lg text-center p-4 mb-4"
                    value={tempEdit.question}
                    onChange={(e) =>
                      passTempFunc("question", tempEdit.questionId, e)
                    }
                  />
                  <div className="w-1/12 flex justify-center items-center text-2xl mb-4 px-2">
                    <button
                      onClick={() => updateQuestion(tempEdit.questionId)}
                      className="w-full h-full"
                    >
                      <FaSave className="text-white hover:text-slate-400" />
                    </button>
                  </div>
                </div>
                <div className="text-white text-center mb-4">
                  Correct Answer
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={tempEdit.answer}
                    onChange={(e) =>
                      passTempFunc("answer", tempEdit.answerId, e)
                    }
                    className="w-11/12 rounded-lg text-center p-4 mb-4"
                  />
                  <div className="w-1/12 flex justify-center items-center text-2xl mb-4 px-2">
                    <button
                      onClick={() => updateAnswer(tempEdit.answerId)}
                      className="w-full h-full"
                    >
                      <FaSave className="text-white hover:text-slate-400" />
                    </button>
                  </div>
                </div>
                <div className="text-white text-xl text-center mb-4">
                  Update Other Answer
                </div>
                {tempEdit?.choices?.map((choice, idx) => (
                  <div key={`answerEdit_${idx + 1}`} className="flex">
                    <input
                      type="text"
                      value={choice.choice}
                      onChange={(e) =>
                        passTempFunc("choice", choice.choiceId, e)
                      }
                      className="w-11/12 rounded-lg text-center p-4 mb-4"
                    />
                    <div className="w-1/12 flex justify-center items-center text-2xl mb-4 px-2">
                      <button
                        onClick={() => updateAnswer(choice.choiceId)}
                        className="w-full h-full"
                      >
                        <FaSave className="text-white hover:text-slate-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
