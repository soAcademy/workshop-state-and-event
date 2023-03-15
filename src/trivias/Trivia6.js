import react, { useState, useEffect } from "react";
import axios from "axios";
const Trivia6 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [toggleUserPopUp, setToggleUserPopUp] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("Home");

  console.log("userName", userName);

  const getAllCategories = async () => {
    const result = await axios.post(
      "http://localhost:3000/trivia/getQuizCategories"
    );
    console.log("result", result);
    setCategories(result.data);
    setPage("Home");
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const getQuizByCategory = async (categoryId) => {
    console.log("categoryId:", categoryId);
    const result = await axios
      .post("http://localhost:3000/trivia/getQuiz", {
        categoryId: categoryId,
      })
      .catch((error) => console.log(error));
    console.log("result.data:", result.data);
    setCurrentCategory(categoryId);
    setQuizzes(result.data);
    setPage("quizzes");
  };

  const handleSubmit = async (quizId, answerId) => {
    console.log("quizId", quizId);
    console.log("answerId", answerId);
    const updatedQuizAnswers = [
      ...quizAnswers,
      {
        quizQuestionId: quizzes[quizId]?.id,
        choice: quizzes[quizId]?.choices?.[answerId]?.id,
      },
    ];
    console.log("answer2", quizzes[quizId]?.choices?.[answerId]);
    console.log("answer3", quizzes[quizId]?.choices);
    console.log("answer4", quizzes[quizId]?.choices?.[answerId]?.id);
    console.log("answer5", quizzes[quizId]);

    // // create a copy of the quizAnswers array using spread operator
    // const updatedQuizAnswers = [...quizAnswers, newAnswer];
    // // update the answer for the current quiz question

    const data = {
      name: userName,
      category: currentCategory,
      quizRecords: quizAnswers,
    };
    console.log("data2", data);

    if (currentQuestion === quizzes.length - 1) {
      const result = await axios
        .post("http://localhost:3000/trivia/submitQuiz", data)
        .catch((error) => console.log(error));
      setScore(result.data.totalScore);
      setPage("result");
    }
    //  console.log("setScore", setScore)
    // update the state with the new quizAnswers array

    setQuizAnswers(updatedQuizAnswers);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1); //proceeds to the next question
  };

  // const getResult = async () => {
  //   const result = await axios.post("http://localhost:3000/trivia/getResults");
  //   // console.log("getResult", result.data);
  //   setResult(result.data);

  // };
  return (
    <>
      {toggleUserPopUp && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-lg">
          <div className="bg-sky-200 rounded-lg w-52 h-52 m-auto px-4 py-7 items-center">
            <div className="flex">
              <div className="text-base mb-1 text-teal-800 text-left flex-auto my-auto">
                User Name
              </div>
              <div>
                <button
                  className="text-sm text-teal-800 font-bold"
                  onClick={() => setToggleUserPopUp(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <form
              className="flex flex-col m-auto"
              onSubmit={(e) => {
                setUserName(e.target[0].value); //always putin "[0]", if it is a form
                setToggleUserPopUp(false);
              }}
            >
              <input
                type="text"
                id="userName"
                value={userName}
                className="mr-4 py-2 border-2 rounded border-blue-300 w-full"
              />
              <button className="px-4 py-2 my-2 mb-3 bg-teal-800 rounded text-white ">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
      {page === "Home" && (
        <div>
          <h1 className="text-center font-bold text-2xl">Select Category</h1>
          <div className="grid grid-cols-2 gap-2 text-center mt-5">
            {categories.map((category, idx) => (
              <div>
              <button
                key={idx}
                className="bg-sky-400 border border-3 py-4 button w-96 font-bold"
                onClick={() => getQuizByCategory(category.id)}
              >
                {category.name}
              </button>
              </div>
            ))}
          </div>
          <button className="flex" onClick={() => setToggleUserPopUp(true)}>
            <span className="fixed bottom-10 lg:right-12 right-6 bg-green-300 rounded-full h-12 w-12 py-2 font-bold text-2xl m-auto">
              +
            </span>
          </button>
        </div>
      )}

      {page === "quizzes" && currentQuestion < quizzes.length && (
        <div>
          <h1 className="text-center">
            Q.{currentQuestion + 1}/{quizzes.length}{" "}
            {/* //needs {} to render HTML */}
          </h1>
          <div className="text-center">score: {score} marks</div>
          <div className="text-center">{quizzes[currentQuestion]?.quiz}</div>
          <div className="grid grid-cols-2 gap-2 text-center">
            {quizzes[currentQuestion]?.choices?.map((choice, index) => (
              <div>
                <button
                  className="bg-sky-400 border border-3 py-4 button w-96"
                  key={index}
                  onClick={() => handleSubmit(currentQuestion, index)}
                >
                  {choice.choice}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === "result" && (
        <div className="font-bold m-3 text-center bg-red-300 p-2 rounded-lg">
          <h1 className="text-center font-bold text-2xl">
            Well Done! {userName}!
          </h1>
          <h1 className="text-center font-bold text-2xl">
            You scored {score} out of {quizzes.length}!
          </h1>
        </div>
      )}
    </>
  );
};

export default Trivia6;
