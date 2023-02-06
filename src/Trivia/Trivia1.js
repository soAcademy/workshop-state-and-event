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

const Trivia1 = () => {
  return (
    <div className="font-nstl">
      <h1 className="font-2xl mb-2 text-center">
        Question no. 1/{quizes.length}
      </h1>
      <p className="mb-2 text-center">Score: 0</p>
      <p className="font-xl mb-2 font-bold">{quizes[0].question}</p>
      <ul className="grid grid-cols-2 gap-2">
        {quizes[0].answers.map((choice, idx) => (
          <li key={idx}>
            <button className="w-full bg-green-300 p-4">{choice}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trivia1;
