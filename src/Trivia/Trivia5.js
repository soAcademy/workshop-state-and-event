import React, { useState } from "react";

//
const Trivia4 = () => {
  const quizes = [
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

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (quizId, answerId) => {
    console.log("quizId", quizId);
    console.log("answerId", answerId);
    setScore(score + (quizes[quizId].answer === answerId ? 1 : 0));
    setCurrentQuiz(quizId + 1);
  };
  return (
    <>
      {currentQuiz < quizes.length && (
        <div className="bg-sky-200 p-6">
          <div className="text-center text-xl font-semibold text-sky-700">
            ข้อ {currentQuiz + 1}/{quizes.length}
          </div>
          <div className="text-center text-xl font-semibold">
            คะแนนสะสม : {score}
          </div>
          <div className="py-4 text-center text-2xl">
            {quizes[currentQuiz].question}
          </div>
          <div className="grid gap-2 grid-cols-2">
            {/* map choices */}
            {quizes[currentQuiz].answers?.map((r, idx) => (
              <button
                key={idx}
                onClick={() => checkAnswer(currentQuiz, idx)}
                className="bg-sky-500 py-4 text-white border-2 border-white shadow-lg"
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      )}
      {currentQuiz >= quizes.length && (
        <div className="text-center text-3xl bg-sky-500 text-white underline p-3 ">
          ได้คะแนนทั้งหมด {score} คะแนน 🦞
        </div>
      )}
    </>
  );
};

export default Trivia4;
