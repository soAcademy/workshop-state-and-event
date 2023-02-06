import { useState } from "react";

const Trivia5 = () => {
  const [quizeNo, setQuizNo] = useState(0);
  const [score, setScore] = useState(0);

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

  const checkAnswer = (quizNo, ansNo) => {
    setScore(quizes[quizNo].answer === ansNo ? score + 1 : score);
    setQuizNo(quizeNo + 1);
  };

  const reset = () => {
    setScore(0);
    setQuizNo(0);
  };

  return (
    <div className="w-full h-screen flex justify-center bg-gray-400 items-center font-prompt text-sm p-4">
      <div className="w-[600px] bg-gray-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-center font-bold mb-6">TRIVIA GAME</h1>
        {quizeNo < 5 && (
          <>
            <div className="qNumber">
              <p className="text-center mb-8">
                ข้อ {quizeNo + 1}/{quizes.length}
              </p>
            </div>
            <div className="qNumber">
              <p className="text-center mb-8">SCORE: {score}</p>
            </div>

            <div className="question">
              <p className="text-center mb-8">
                Q{quizeNo + 1}: {quizes[quizeNo].question}
              </p>
            </div>
            <div className="choice grid grid-col-1 md:grid-cols-2 gap-4">
              {quizes[quizeNo].answers.map((r, idx) => (
                <button
                  onClick={() => checkAnswer(quizeNo, idx)}
                  key={idx}
                  className="h-14 bg-green-200 flex text-left items-center rounded-full hover:bg-green-300 shadow-sm active:shadow-md p-4"
                >
                  {idx + 1}. {r}
                </button>
              ))}
            </div>
          </>
        )}
        {quizeNo >= 5 && (
          <div className="text-center">
            <div className="qNumber">
              <p className="text-center mb-8">สรุปคะแนน {score}</p>
            </div>
            <button
              onClick={() => reset()}
              className="h-14 bg-green-200 rounded-lg shadow-md hover:bg-green-300 active:shadow-lg p-2 px-4"
            >
              Try again!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trivia5;
