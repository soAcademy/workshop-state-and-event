import { useState, useEffect } from "react";
import axios from "axios";

const Trivia6 = () => {
  const [categoryName, setCategoryName] = useState();
  const [categoryList, setCategoryList] = useState();
  const [username, setUsername] = useState();
  const [avatar, setAvatar] = useState();
  const [quizes, setQuizes] = useState();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState();
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [toggleCheckName, setToggleCheckName] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // console.log("categoryId:", categoryName);

  useEffect(() => {
    const data = JSON.stringify({
      user: username,
      avatar: avatar,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3700/createUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCurrentUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [toggleCheckName]);

  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3700/getQuizCategories",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCategoryList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let categoryId = categoryList?.find((r) => r.category === categoryName);
  useEffect(() => {
    // console.log("categoryList:", categoryId?.id);
    const data = JSON.stringify({
      categoryId: categoryId?.id,
    });
    console.log("data:", data);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3700/getQuiz",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setQuizes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [categoryName]);

  const checkAnswer = (quizNo, answerId) => {
    console.log(quizNo, answerId);
    setCurrentQuiz(quizNo + 1);
    const _ans = JSON.parse(localStorage.getItem("newAnswers")) ?? [];
    const newAnswers = [
      ..._ans,
      {
        quizId: quizes[quizNo].id,
        choiceId: answerId,
      },
    ];
    updateAns(newAnswers);
  };

  const updateAns = (newAnswers) => {
    localStorage.setItem("newAnswers", JSON.stringify(newAnswers));
    setAnswers(newAnswers);
  };
  console.log("Answers:", answers);

  useEffect(() => {
    const data = JSON.stringify({
      categoryId: categoryId?.id,
      userId: currentUser?.id,
      play: answers,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3700/submitQuiz",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setScore(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    const newAnswers = [];
    updateAns(newAnswers);
  }, [toggleSubmit]);

  return (
    <>
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <div className="mt-4">
          <h1 className="text-5xl font-extrabold text-center">
            กรุณาใส่ข้อมูลส่วนตัว
          </h1>
          <div className="flex mt-10 space-x-4">
            <label className="text-2xl">ชื่อ</label>
            <div>
              <input
                type="string"
                name="username"
                className="p-2 w-full mt-2"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <label className="text-2xl">รูปตัว Avatar</label>
            <div>
              <input
                type="string"
                name="avatar"
                className="p-2 w-full mt-2"
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => setToggleCheckName(true)}
              className="mt-5 bg-yellow-400 text-center text-2xl p-2"
            >
              Check Name
            </button>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-5xl font-extrabold text-center">
            คำถามปัญหาเชาว์
          </h1>
          <div className="w-1/3 mt-5">
            <label className="text-2xl">เลือกหมวดคำถาม</label>
            <br />
            <select
              className="p-2 pb-3 w-full mt-2 text-2xl"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              {categoryList?.map((r, idx) => (
                <option key={idx} value={r.category}>
                  {r.category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          {quizes?.length > 0 && currentQuiz < quizes?.length && (
            <>
              <div className="text-center text-2xl mt-5">
                ข้อ {currentQuiz + 1}/{quizes?.length}
              </div>
              <div className="py4 text-center text-2xl mt-5">
                {quizes[currentQuiz]?.quiz}
              </div>
              <div className="grid gap-2 grid-cols-2 text-2xl mt-5">
                {quizes[currentQuiz]?.choices.map((r, index) => (
                  <button
                    className="bg-yellow-700 py-4"
                    onClick={() => checkAnswer(currentQuiz, r.id)}
                  >
                    {r.choice}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        {currentQuiz >= quizes?.length && (
          <button
            onClick={() => setToggleSubmit(true)}
            className="mt-5 bg-yellow-400 text-center p-2"
          >
            <span className="text-center text-2xl">Submit</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Trivia6;
