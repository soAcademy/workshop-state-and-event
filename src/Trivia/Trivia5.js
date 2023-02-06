import { useState } from "react";

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

const Trivia5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleChoiceClick = (idx) => {
    quizes[currentQuestion].answer === idx && setScore(score + 1);
    // console.log(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="font-nstl">
      {currentQuestion < quizes.length ? (
        <>
          <h1 className="font-2xl mb-2 text-center">
            Question no. {currentQuestion + 1}/{quizes.length}
          </h1>
          <p className="mb-2 text-center">Score: {score}</p>
          <p className="font-xl mb-2 font-bold">
            {quizes[currentQuestion].question}
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {quizes[currentQuestion].answers.map((choice, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleChoiceClick(idx)}
                  className="w-full bg-green-300 p-4"
                >
                  {choice}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1 className="font-2xl mb-2 text-center">
          Total score is: <b>{score}</b> out of {quizes.length}
        </h1>
      )}
    </div>
  );
};

export default Trivia5;
