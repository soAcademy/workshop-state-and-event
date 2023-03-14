import React, { useState, useEffect } from "react";
import axios from "axios";

const Trivia6 = () => {
  const [getQuiz, setGetQuiz] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [ranking, setRanking] = useState();
  const [username, setUsername] = useState();
  const [usernamePopup, setUsernamePopup] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [scoreByRound, setScoreByRound] = useState();

  console.log("selectCategory", selectCategory);
  console.log("getQuiz", getQuiz);
  // console.log("ranking", ranking);
  console.log("User: => ", username);
  // console.log("userAnswer", userAnswers);
  console.log("score", scoreByRound);

  //---------------------getCategory for Api ----------------//
  const getCategoryFromApi = async () => {
    try {
      const result = await axios.post("http://localhost:3100/getCategory");
      console.log("CategoryFromApi", result.data);
      setCategory(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryFromApi();
  }, []);
  //---------------------------------------------------------//

  //---------------------getQuiz for Api --------------------//

  const getQuizFromApi = async (categoryId) => {
    const result = await axios.post("http://localhost:3100/getQuestion", {
      categoryId,
    });
    console.log("QuizFromApi", result.data);
    setGetQuiz(result.data);
  };
  useEffect(() => {
    getQuizFromApi(selectCategory);
  }, [selectCategory]);

  //---------------------------------------------------------//

  //-------------------submitQuestion ----------------------//
  console.log("currentQuiz", currentQuiz, "/", getQuiz.length);

  const submitQuestion = async (currentQuiz, idx) => {
    // console.log("getQuiz in Sub:", getQuiz);
    // console.log("currentQuiz 2 ", currentQuiz, "/", getQuiz.length);

    let answer = {
      questionId: getQuiz[currentQuiz].id,
      userChoiceId: getQuiz[currentQuiz].choices[idx].id,
    };
    const tmpUserAnswers = [...userAnswers, answer];
    console.log("tmpUserAnswers", tmpUserAnswers);

    if (currentQuiz === getQuiz.length - 1) {
      console.log("test");
      const result = await axios.post("http://localhost:3100/submitQuestion", {
        user: username,
        categoryId: selectCategory,
        roundQuestions: userAnswers,
      });
      console.log("submit Quiz", result);
      setScoreByRound(result?.data);
    }
    setCurrentQuiz(currentQuiz + 1);
    setUserAnswers(tmpUserAnswers);
  };

  //-------------------------------------------------------//

  //-------------------- GetResult ------------------------//

  const getResult = async (categoryId) => {
    const result = await axios.post(
      "http://localhost:3100/getResultByCategory",
      {
        categoryId,
      }
    );
    console.log("getResult", result.data);
    setRanking(result.data);
  };
  useEffect(() => {
    getResult(selectCategory);
  }, [scoreByRound]);

  //-------------------------------------------------------//

  return (
    <div>
      {selectCategory === 0 && (
        <div className=" bg-slate-200 h-screen">
          <div className="text-center pt-10">
            <p className="text-2xl font-semibold">QUIZ TRIVIA GAMES</p>
          </div>
          <div className="text-center pt-12">
            <p className="text-lg">Press to select a category.</p>
          </div>
          <div className="flex justify-center w-full">
            {category && (
              <div className="flex flex-col space-y-5 pt-10">
                {category.map((r, idx) => (
                  <button
                    key={idx}
                    className="text-xl cursor-pointer w-72 border-4 border-white bg-purple-700 text-white rounded-md p-5 hover:bg-purple-500"
                    onClick={() => {
                      setSelectCategory(r.id);
                      setUsernamePopup(true);
                    }}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {usernamePopup && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <div className="bottom-10 flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg">
            <div className="mb-4 flex justify-between">
              <p className="font-bold flex-auto">username</p>
              <button
                className="cursor-pointer"
                onClick={() => setUsernamePopup(false)}
              >
                ปิด
              </button>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 border-neutral-400 rounded py-2 mb-3 w-full"
            />
            <div>
              <button
                onClick={() => {
                  setUsernamePopup(false);
                }}
                className="px-4 py-2 bg-sky-300 active:bg-sky-100 rounded w-full font-bold"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}

      {currentQuiz < getQuiz.length && (
        <div className="p-4">
          <div className="text-center mb-4 text-xl">
            <p>
              ข้อ {currentQuiz + 1}/{getQuiz.length}
            </p>
          </div>
          <div className="text-lg mb-4">
            <p className="mb-2">คำถาม :</p>
            <div>{getQuiz[currentQuiz]?.questName}</div>
          </div>
          <div className="grid gap-4 grid-cols-2">
            {getQuiz[currentQuiz]?.choices?.map((j, idx) => (
              <button
                key={idx}
                className="bg-cyan-400 h-12 rounded hover:bg-cyan-200"
                onClick={() => {
                  submitQuestion(currentQuiz, idx);
                }}
              >
                {j.choiceName}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        {currentQuiz >= getQuiz?.length && (
          <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
            <div className="flex flex-col m-auto bg-white p-5 w-3/5 rounded-lg text-center">
              <p className="text-xl font-semibold">
                สรุปคะแนนของคุณ : {scoreByRound?.score}
              </p>
              <p className="text-xl font-semibold my-8">Ranking</p>
              {ranking
                ?.sort((a, b) => b.score - a.score)
                .slice(0, 5)
                .map((r, idx) => (
                  <div>
                    <p className="text-lg font-medium m-2">
                      {idx + 1}. {r.user} / score: {r.score}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trivia6;
