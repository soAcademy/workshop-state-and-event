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
  console.log([...Array(4).keys()]);

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const checkAns = (ans) => {
    ans === quizes[currentQuiz].answer ? setScore(score + 1) : setScore(score);
  };

  return (
    <>
      <div className="text-center mt-2">
        ข้อ{currentQuiz + 1}/{quizes.length}
      </div>
      <div className="text-center">คะแนน {score}</div>
      <div className="text-center">{quizes[currentQuiz].question}</div>
      <div className="grid grid-cols-2 gap-2 text-center mx-2">
        {quizes[currentQuiz].answers.map((r, idx) => (
          <button
            className="bg-blue-300 rounded p-4 mt-4"
            onClick={() => {
              // setCurrentQuiz(currentQuiz + 1);
              checkAns(idx);
            }}
          >
            {r}
          </button>
        ))}
      </div>
    </>
  );
};

export default Trivia3;
