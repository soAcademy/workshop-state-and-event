import { setCanvasCreator } from "echarts";
import { useState } from "react";

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

  const [currentQuiz, SetcurrentQuiz] = useState(0);
  const [score, Setscore] = useState(0);

  const checkAns = (quizeId, ansId) => {
    Setscore(score + (quizes[quizeId].answer === ansId ? 1 : 0));
    SetcurrentQuiz(currentQuiz + 1);
  };

  return (
    <>
      <div className="text-center">
        ข้อ {currentQuiz}/{quizes.length}
      </div>
      <div className="text-center py-2">คะแนน {score}</div>
      <div className="text-center py-2">{quizes[currentQuiz].question}</div>
      <div className="grid grid-cols-2 gap-2">
        {quizes[currentQuiz].answers.map((r, index) => (
          <button
            onClick={() => checkAns(currentQuiz, index)}
            className="bg-green-400 py-4"
          >
            {r}
          </button>
        ))}
      </div>
    </>
  );
};

export default Trivia4;
