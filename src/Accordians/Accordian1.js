const Accordian1 = () => {
  const faqs = [
    {
      question: <>อะไรนะ</>,
      answer: (
        <>
          นั่นแหละอะไร เหมือนจะเข้าใจแล้วนะ แต่เหมือนจะไม่เข้าใจ อีกนิดเดียว
          ขอบคุณทุกคนครับ
        </>
      ),
    },
    {
      question: <>ที่ไหนนะ</>,
      answer: (
      <>ที่นี่แหละ</>
      ),
    },
    {
      question: <>Why does the AI seem so real and lifelike?</>,
      answer: (
        <>
          These models were trained on vast amounts of data from the internet
          written by humans, including conversations, so the responses it
          provides may sound human-like. It is important to keep in mind that
          this is a direct result of the system's design (i.e. maximizing the
          similarity between outputs and the dataset the models were trained on)
          and that such outputs may be inaccurate, untruthful, and otherwise
          misleading at times.
        </>
      ),
    },
    {
      question: <>Who can view my conversations?</>,
      answer: (
        <>
          As part of our commitment to safe and responsible AI, we review
          conversations to improve our systems and to ensure the content
          complies with our policies and safety requirements.{" "}
        </>
      ),
    },
  ];

  return (
    <>
      {faqs?.map((faq, index) => (
        <div key={index} className="py-2">
  {/* อันนี้ต้องมีเพราะมันเป็น array ที่เราต้องการเลือกให้มันมาrender หน้าจอ */}
          <div className="bg-teal-300">{index + 1}.{faqs.question}</div>
          <div className="bg-gray-200">{faqs.answer}</div>
        </div>
      ))}
    </>
  );
};
export default Accordian1;
