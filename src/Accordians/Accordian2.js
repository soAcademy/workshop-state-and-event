import { useState } from "react";

const Accordian2 = () => {
  const faqs = [
    {
      question: <>เหมือนจะเริ่มเข้าใจแล้วหรือเปล่า</>,
      answer: (
        <>
          เหมือนจะเริ่มเข้าใจแล้วนะ มันเหมือนจะเริ่มเข้าใจแล้วจริง ๆ
          ขออีกนิดเถอะ
        </>
      ),
    },
    {
      question: <>ขอให้โลกนี้ทำให้ผมเก่งโค้ดขึ้นได้อย่างรวดเร็วได้หรือเปล่า</>,
      answer: <>ได้สิ ถ้าไม่ได้เราจะมาเรียนกับที่นี่ทำไม</>,
    },
    {
      question: <>ตอนนี้สงสัยว่า Chat GPT มันดีจริงหรือเปล่าเนี่ย</>,
      answer: (
        <>
          {" "}
          ChatGPT is fine-tuned from GPT-3.5, a language model trained to
          produce text. ChatGPT was optimized for dialogue by using
          Reinforcement Learning with Human Feedback (RLHF) – a method that uses
          human demonstrations to guide the model toward desired behavior.
        </>
      ),
    },
    {
      question: (
        <>ทำไม ChatGPT ถึงยังน่าสนใจและน่าใช้อยู่ แล้วมันมีปัญหาอะไรบ้าง</>
      ),
      answer: (
        <>
          <div>
            ChatGPT is not connected to the internet, and it can occasionally
            produce incorrect answers. It has limited knowledge of world and
            events after 2021 and may also occasionally produce harmful
            instructions or biased content.
          </div>
          <div>
            We'd recommend checking whether responses from the model are
            accurate or not. If you find an answer is incorrect, please provide
            that feedback by using the "Thumbs Down" button.
          </div>
        </>
      ),
    },
  ];

  const [toggle, setToggle] = useState(-1);
  const updateFaqToggle = (index) => {
    setToggle(toggle === index ? -1 : index);
  };

  return (
    <>
      {faqs?.map((faqs, index) => (
        <div
          key={index}
          className="py-2 cursor-pointer"
          onClick={() => updateFaqToggle(index)}
        >
          <div className="bg-green-300">
            {index + 1}. {faqs.question}
          </div>
          {toggle === index && (
            <div className="bg-gray-200">{faqs.answer}</div>
          )}
        </div>
      ))}
    </>
  );
};
export default Accordian2;
