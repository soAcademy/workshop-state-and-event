import React, { useState } from "react";
const Trivia3 = () => {
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

  const checkAnswer = (quizId, answerId) => {
    console.log(quizId, answerId);
    setScore(score + (quizzes[quizId].answer === answerId ? 1 : 0));
    setCurrentQuestion(quizId + 1); //proceeds to the next question
  };

  return (
    <>
      <div>
        <h1 className="text-center">
          Q.{currentQuestion + 1}/{quizzes.length}{" "}
          {/* //needs {} to render HTML */}
        </h1>
        <div className="text-center">score: {score} marks</div>
        <div className="text-center">{quizzes[currentQuestion].question}</div>
        <div className="grid grid-cols-2 gap-2 text-center">
          {quizzes[currentQuestion].answers.map((choice, index) => (
            <div>
              <button
                className="bg-sky-400 border border-3 py-4 button w-56"
                key={index}
                onClick={() => checkAnswer(currentQuestion, index)}
              >
                {choice}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trivia3;
