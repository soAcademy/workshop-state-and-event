import { useState, useEffect } from "react";
import axios from "axios";

export const useFrameQuestion = ({ categorySelected, setFrame }) => {
  const [questionNo, setQuestionNo] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const setAnswersFunc = (questionNo, answerId) => {
    setAnswers([...answers, answerId]);
    questionNo < 2 ? setQuestionNo(questionNo + 1) : setFrame("result");
  };

  useEffect(() => {
    const getQuestionsByCategory = () => {
      const data = JSON.stringify({
        categoryId: categorySelected,
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/triviaGame/getQuestionsByCategory",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setQuestions(response.data);
          setFrame("question");
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    categorySelected > 0 && getQuestionsByCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  return {
    questionNo,
    setQuestionNo,
    questions,
    setQuestions,
    answers,
    setAnswers,
    setAnswersFunc,
  };
};
