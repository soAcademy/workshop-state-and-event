import { useState } from "react";

const Accordian3 = () => {
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

  const updateAns = (index) => {
    console.log("toggles",toggles)
    const newToggles = [...toggles]
    console.log("newToggles:",newToggles)
    console.log("index",index)
    newToggles[index] = !newToggles[index];
    console.log("newToggles",newToggles)

    setToggles(newToggles);
  };

  return (
    <>
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="py-2 cursor-pointer"
          onClick={() => updateAns(index)}
        >
          <div className="bg-yellow-500">
            Q{index + 1}.{faq.question}
          </div>
          {toggles[index] && (
            <div className="bg-white-500">
              A{index + 1}.{faq.answer}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordian3;
