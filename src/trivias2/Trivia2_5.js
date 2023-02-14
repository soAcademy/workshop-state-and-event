import React, { useState } from "react";

const Trivia2_3 = () => {
  const quizzes = [
    {
      question: "ซุปอะไรมีสารอาหารมากที่สุด",
      answers: ["ซุปไก่สกัด", "ซุปหางวัว", "ซุปเปอร์มาเก็ต", "ซุปหูฉลาม"],
      answer: 2,
    },
    {
      question: "เพลง แปดโมงเช้าวันอังคาร ร้องยังไง",
      answers: [
        "แปดโมงเช้าวันอังคาร",
        "รู้บ้างไหมว่าจะไป มันไม่จบแค่นั้น",
        "ประเทศไทยรวมเลือดเนื้อชาติเชื้อไทย…",
        "ไม่อยากรู้วันเวลา เช้าขึ้นมาไม่อยากเจอ",
      ],
      answer: 2,
    },
    {
      question: "จะแบ่งกระทิงแดง 5 ขวดให้คน 2 คนเท่าๆ กันต้องทำไง",
      answers: [
        "แบ่งได้ คนละ 2 ขวด",
        "แบ่งได้ คนละ 2.5 ขวด",
        "แบ่งได้ คนละ 1 ขวด",
        "แบ่งไม่ได้",
      ],
      answer: 0,
    },
    {
      question: "ก่อนจะถึงประเทศอาหลับ ต้องถึงประเทศอะไรก่อน",
      answers: ["เลบานอน", "อิสราเอล", "นิวซีแลนด์", "ออสเตเรีย"],
      answer: 0,
    },
    {
      question: "เกาะ อะไรมีเสาไฟฟ้า เยอะที่สุด",
      answers: ["เกาะสีชัง", "เกาะกลางถนน", "เกาะช้าง", "เกาะเกร็ด"],
      answer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const checkAnswer = (answerId) => {
    const newScore =
      quizzes[currentQuestion].answer === answerId ?  1 : 0;
    setScore(newScore + score);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div>
      {currentQuestion < quizzes.length && (
        <div className="text-center pt-2">
          <div>
            Question: {[currentQuestion + 1]}/{quizzes.length}{" "}
          </div>{" "}
          {/* will be displayed in decomals if writtten like this ://{[currentQuestion + 1]/quizzes.length} */}
          <div>Score: {score} point</div>
          <div>{quizzes[currentQuestion].question}</div>
          <div className="grid grid-cols-2 w-2/3 m-auto pt-2">
            {quizzes[currentQuestion].answers.map((answer, idx) => (
              <div
                key={idx}
                onClick={() => checkAnswer(idx)}
                className="bg-sky-500 p-4 border border-2 border-black m-2"
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      )}
      {currentQuestion >= quizzes.length && (
      <div>
        <h1>Total Score: {score} points</h1>
      </div>
      )}
    </div>
  );
};

export default Trivia2_3;
