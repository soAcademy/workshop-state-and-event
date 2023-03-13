import { useState, useEffect } from "react";
import axios from "axios";

// const quizzes = [
//   {
//     question: "ซุปอะไรมีสารอาหารมากที่สุด",
//     answers: ["ซุปไก่สกัด", "ซุปหางวัว", "ซุปเปอร์มาเก็ต", "ซุปหูฉลาม"],
//     answer: 2,
//   },
//   {
//     question: "เพลง แปดโมงเช้าวันอังคาร ร้องยังไง",
//     answers: [
//       "แปดโมงเช้าวันอังคาร",
//       "รู้บ้างไหมว่าจะไป มันไม่จบแค่นั้น",
//       "ประเทศไทยรวมเลือดเนื้อชาติเชื้อไทย…",
//       "ไม่อยากรู้วันเวลา เช้าขึ้นมาไม่อยากเจอ",
//     ],
//     answer: 2,
//   },
//   {
//     question: "จะแบ่งกระทิงแดง 5 ขวดให้คน 2 คนเท่าๆ กันต้องทำไง",
//     answers: [
//       "แบ่งได้ คนละ 2 ขวด",
//       "แบ่งได้ คนละ 2.5 ขวด",
//       "แบ่งได้ คนละ 1 ขวด",
//       "แบ่งไม่ได้",
//     ],
//     answer: 0,
//   },
//   {
//     question: "ก่อนจะถึงประเทศอาหลับ ต้องถึงประเทศอะไรก่อน",
//     answers: ["เลบานอน", "อิสราเอล", "นิวซีแลนด์", "ออสเตเรีย"],
//     answer: 0,
//   },
//   {
//     question: "เกาะ อะไรมีเสาไฟฟ้า เยอะที่สุด",
//     answers: ["เกาะสีชัง", "เกาะกลางถนน", "เกาะช้าง", "เกาะเกร็ด"],
//     answer: 1,
//   },
// ];

const BinQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8000/binQuiz/getCategories",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:8000/binQuiz/getRandomizedQuizzesByCategory",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       categoryId: 1,
  //     },
  //   })
  //     .then((response) => setQuizzes(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  const handleCategoryClick = (categoryId) => {
    axios({
      method: "post",
      url: "http://localhost:8000/binQuiz/getRandomizedQuizzesByCategory",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        categoryId: categoryId,
      },
    })
      .then((response) => {
        setCurrentCategory(categoryId);
        setQuizzes(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleChoiceClick = (answerId) => {
    axios({
      method: "post",
      url: "http://localhost:8000/binQuiz/getCorrectChoiceByQuiz",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        quizId: quizzes[currentQuestion].questionId,
      },
    })
      .then((response) => {
        // console.log("answerId", answerId);
        // console.log("correctChoiceId", response.data.correctChoiceId);
        response.data.correctChoiceId === answerId && setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
      })
      .catch((error) => console.log(error));
    // quizzes[currentQuestion].answer === idx && setScore(score + 1);
    // console.log(score);
    // setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="font-nstl">
      {currentCategory === 0 ? (
        <>
          <h1 className="font-2xl mb-2 text-center">
            Choose a category to play
          </h1>
          <ul className="grid grid-cols-2 gap-2">
            {categories.map((category, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="w-full bg-green-300 p-4"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : currentQuestion < quizzes.length ? (
        <>
          <h1 className="font-2xl mb-2 text-center">
            Question no. {currentQuestion + 1}/{quizzes.length}
          </h1>
          <p className="mb-2 text-center">Score: {score}</p>
          <p className="font-xl mb-2 font-bold">
            {quizzes[currentQuestion].question}
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {quizzes[currentQuestion].answers.map((choice, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleChoiceClick(choice.answerId)}
                  className="w-full bg-green-300 p-4"
                >
                  {choice.answerText}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1 className="font-2xl mb-2 text-center">
          Total score is: <b>{score}</b> out of {quizzes.length}
        </h1>
      )}
    </div>
  );
};

export default BinQuiz;
