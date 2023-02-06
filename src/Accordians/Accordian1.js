const Accordian1 = () => {
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

  return (
    <>
      {faqs?.map((faq, index) => (
        <div key={index} className="py-">
          <div className="bg-green-300">
            {index + 1}. {faq.question}
          </div>
          <div className="bg-gray-200">{faq.answer}</div>
        </div>
      ))}
    </>
  );
};

export default Accordian1;