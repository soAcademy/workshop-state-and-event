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
const Accordian1 = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [scores, setScores] = useState(0);
  const checkAnswer = (quizId, answerId) => {
    setScores(scores + (quizes[quizId].answer === answerId ? 1 : 0));
    setCurrentQuiz(quizId+1)
  };

  return (
    <>
    {currentQuiz < quizes.length&&(<div className="text-center">
        <div>
          ข้อที่{currentQuiz + 1}/{quizes.length}
        </div>
        <div className="text-center">คะแนน {scores}</div>
        <div>{quizes[currentQuiz].question}</div>
        <div className="grid grid-cols-2 gap-4">
          {quizes[currentQuiz].answers.map((r, index) => {
            return (
              <>
                <div
                  className="bg-teal-200"
                  onClick={() => checkAnswer(currentQuiz, index)}
                >
                  {r}
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>)}
      {currentQuiz>=  quizes.length && (<div className="text-center text-xl">คะแนนรวม{scores}</div>)}
    
    </>
  );
};
export default Accordian1;
