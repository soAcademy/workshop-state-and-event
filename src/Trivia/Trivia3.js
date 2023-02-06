import React, { useState } from "react";

const Trivia3 = () => {
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

  // const [quizId, setQuizId] = useState(1);
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (id, answer) => {
    // console.log(quizId, answer);
    setScore(score + (quizes[id].answer === answer ? 1 : 0));
  };
  // console.log(score);
  return (
    <div className="p-4">
      <div className="text-center mb-4 text-xl">
        <p>
          ข้อ {quizId + 1}/{quizes.length}
        </p>
      </div>
      <div className="text-center text-lg mb-4">
        <p>คะแนน : {score}</p>
      </div>
      <div className="text-lg mb-4">
        <p className="mb-2">คำถาม :</p>
        <div>{quizes[quizId].question}</div>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {quizes[quizId].answers.map((r, idx) => (
          <button
            key={idx}
            className="bg-cyan-400 h-12 rounded active:bg-cyan-200"
            onClick={() => checkAnswer(quizId, idx)}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trivia3;
