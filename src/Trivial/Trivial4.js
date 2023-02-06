import { useState } from "react";

const Trivia2 = () => {
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
    console.log(quizId, answerId);
    setScore(score + (quizes[quizId].answer === answerId ? 1 : 0));
    setCurrentQuiz(quizId + 1); 
  };
  //ตั้งค่าตัวแปร
  return (
    <>
      <div className="text-center bolt text-3xl" >ข้อ {currentQuiz + 1}/{quizes.length}</div>
      <div className="text-center text-xl" >คะแนน {score}</div>
      <div className="py-4 text-center text-lg">{quizes[currentQuiz].question}</div>  
      <div className="grid gap-2 grid-cols-2 " >
        {quizes[currentQuiz].answers.map((r, index) => (
          <button className="bg-sky-400 py-2 rounded-lg" 
          onClick={() => checkAnswer(currentQuiz, index)} >{r}</button>
        ))}
          
        
        </div>
    
    </>
  )
}
export default Trivia2;