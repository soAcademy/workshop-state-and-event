import { useState, useEffect } from "react";
import axios from "axios";
import SelectCategory from "./SelectCategory";

const TriviaDB = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [quizes, setQuizes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    // get category list from api
    axios({
      method: "POST",
      url: `http://localhost:3100/trivia/getCategories`,
    }).then((response) => {
      console.log("getCategories : ", response.data);

      const _categories = response.data;
      setCategories(_categories);
    });
  }, []);

  useEffect(() => {
    if (currentCategory !== "") {
      var data = JSON.stringify({
        categoryName: currentCategory,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3100/trivia/getQuizesByCategory",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          const _quizes = response.data;
          console.log(_quizes);
          setQuizes(_quizes);
          console.log("quizes : ", quizes);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [currentCategory]);

  const submitAnswer = (currentQuiz, index) => {
    //todo create object of user answers
    let quizId = quizes[currentQuiz].id;
    let userChoiceId = quizes[currentQuiz].choices[index].id;
    let answer = { quizId, userChoiceId };
    let _userAnswers = [...userAnswers,answer]
    
    if (currentQuiz === quizes.length-1){
      let objToSubmit = {user, categoryName: currentCategory,roundQuizes: _userAnswers}
      alert("I am going to fire api with this data : " + JSON.stringify(objToSubmit));
    } else {
      setUserAnswers(_userAnswers)
      setCurrentQuiz(currentQuiz + 1);
    }
  };



  console.log("currentCategory : ", currentCategory);
  console.log("user : ", user);
  return (
    <>
      {currentCategory === "" && (
        <SelectCategory
          setUser={setUser}
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />
      )}
      {currentQuiz < quizes.length && (
        <div className="m-32 h-1/2 bg-yellow-200 p-16 rounded-xl">
          <div className="text-center">
            {currentQuiz + 1}/{quizes.length}
          </div>
          <div className="text-center">
            คะแนน : {score}/{quizes.length}
          </div>
          <div className="py-4 text-center">{quizes[currentQuiz].quiz}</div>
          <div className="mx-16 grid gap-2 grid-cols-1">
            {quizes[currentQuiz].choices.map((choice, index) => (
              <button
                className="bg-green-400 py-4"
                onClick={() => submitAnswer(currentQuiz, index)}
              >
                {choice.choice} {choice.id}
              </button>
            ))}
          </div>
        </div>
      )}
      {currentQuiz >= quizes.length && (
        <div className="text-center text-xl">
          สรุปคะแนน {score}/{quizes.length}
        </div>
      )}
    </>
  );
};

export default TriviaDB;
