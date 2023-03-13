import { useState, useEffect } from "react";
import axios from "axios";

export const useFrameSetting = ({ frame, setFrame }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [editQId, setEditQId] = useState(undefined);
  const [tempEdit, setTempEdit] = useState({});

  useEffect(() => {
    frame === "setting" && getQuestions();
  }, [frame]);

  const getQuestions = () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/triviaGame/getAllQuestions",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAllQuestions(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const setTempFunc = () => {
      const currentQuestion = allQuestions?.filter(
        (question) => question.id === editQId
      )[0];

      setTempEdit({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        answerId: currentQuestion.answer.id,
        answer: currentQuestion.answer.answer,
        choices: currentQuestion.choices.map((choice) => ({
          key: choice.id,
          choiceId: choice.id,
          choice: choice.answer,
        })),
      });

      setFrame("edit");
    };

    editQId !== undefined && setTempFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editQId]);

  const passTempFunc = (type, id, e) => {
    //question, answer
    if (type === "question") {
      setTempEdit(() => {
        // console.log(e.target.value);
        // console.log(tempEdit);
        const _temp = { ...tempEdit };
        _temp.question = e.target.value;
        // console.log(_temp);
        return _temp;
      });
    }

    if (type === "answer") {
      // console.log(id);
      setTempEdit(() => {
        const _temp = { ...tempEdit };
        _temp.answer = e.target.value;
        return _temp;
      });
    }

    if (type === "choice") {
      // console.log(id);
      setTempEdit(() => {
        const index = tempEdit.choices
          .map((choice) => choice.choiceId)
          .indexOf(id);
        const _temp = { ...tempEdit };
        _temp.choices[index].choice = e.target.value;
        // console.log("index", index);
        // console.log("_temp", _temp);
        return _temp;
      });
    }
  };

  const updateQuestion = (id) => {
    console.log("id", id);
    const data = JSON.stringify({
      id: id,
      question: tempEdit.question,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/triviaGame/updateQuestion",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateAnswer = (id) => {
    console.log(id);
    const data = JSON.stringify({
      id: id,
      answer:
        tempEdit.choices.filter((choice) => choice.choiceId === id).length >
        0
          ? tempEdit.choices.filter((choice) => choice.choiceId === id)[0]
              .choice
          : tempEdit.answer,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/triviaGame/updateAnswer",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    allQuestions,
    setAllQuestions,
    editQId,
    setEditQId,
    tempEdit,
    setTempEdit,
    passTempFunc,
    updateQuestion,
    updateAnswer,
  };
};
