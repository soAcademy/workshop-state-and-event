import React, { useState } from "react";

const Accordians3 = () => {
  const faqs = [
    {
      question: <>How much does it cost to use ChatGPT?</>,
      answer: <>The research preview of ChatGPT is free to use. </>,
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

  const [toggles, setToggles] = useState(
    [...Array(faqs.length)].map(() => false)
  );
  console.log(toggles);
  const updateFaqToggles = (idx) => {
    const newToggles = [...toggles];
    newToggles[idx] = !newToggles[idx];
    setToggles(newToggles);
  };

  return (
    <>
      {faqs?.map((r, idx) => (
        <div
          className="my-3 cursor-pointer"
          onClick={() => {
            updateFaqToggles(idx);
          }}
        >
          <div className="bg-green-200">
            Q{idx + 1} : {r.question}
          </div>
          {toggles[idx] && <div className="bg-white">{r.answer}</div>}
        </div>
      ))}
    </>
  );
};

export default Accordians3;
