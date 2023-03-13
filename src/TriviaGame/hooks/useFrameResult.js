import { useState, useEffect } from "react";
import axios from "axios";

export const useFrameResult = ({
  frame,
  username,
  categorySelected,
  questions,
  answers,
}) => {
  const [resultReturn, setResultReturn] = useState({});

  useEffect(() => {
    const getResultFunc = () => {
      const data = JSON.stringify({
        name: username,
        categoryId: categorySelected,
        questions: questions.map((question, idx) => ({
          id: question.id,
          choices: question.choices.map((choice) => ({
            choice: choice.id,
          })),
          select: answers[idx],
        })),
      });

      // console.log(JSON.stringify(data, " ", 2));

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/submitQuiz",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setResultReturn(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    answers.length === 3 &&
      categorySelected !== undefined &&
      frame === "result" &&
      questions.length > 0 &&
      username !== undefined &&
      getResultFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame]);

  return { resultReturn, setResultReturn };
};
