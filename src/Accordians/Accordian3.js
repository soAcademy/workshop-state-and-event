import { useState } from "react";

const Accordian3 = () => {
const faqs = [
  {
    question: <>เอาแล้วนะ เหมือนจะเริ่มเข้าใจแล้วนะ โครงสร้างแบบเพียว ๆ เหมือนจะทำได้ เพราะมีตัวอย่าง</>,
    answer: <>น่าจะต้องเริ่มกลับไปทบทวนมากขึ้น</>,
  },
  {
    question: <>ลองใช้ ChatGPT บ้างมั้ย</>,
    answer: <>เคยลองแล้วแต่เหมือนจะมีบางอย่างที่เราไม่รู้</>,
  },
  {
    question: <>How does ChatGPT work?</>,
      answer: (
        <>
          ChatGPT is fine-tuned from GPT-3.5, a language model trained to
          produce text. ChatGPT was optimized for dialogue by using
          Reinforcement Learning with Human Feedback (RLHF) – a method that uses
          human demonstrations to guide the model toward desired behavior.
        </>
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
    question: <>Can I trust that the AI is telling me the truth?</>,
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

const [toggles, setToggles] = useState(
  [...Array(faqs.length)].map(() => false));

const updateFaqToggle = (index) => {
  const newToggles = [...toggles];
  newToggles[index] = !newToggles[index];
  setToggles(newToggles);
};

return (
<>
  {faqs?.map((faqs, index) => (
    <div 
    key = {index}
    className ="py-2 cursor-pointer"
    onClick={() => updateFaqToggle(index)}
    >
      <div className="bg-green-300">
        {index + 1}. {faqs.question}
      </div>
      {toggles[index] && <div className ="bg-gray-200">{faqs.answer}</div>}
    </div>
  )
  ) }
</>
);
};
export default Accordian3;