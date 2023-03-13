import { useEffect } from "react";

export const useFrameName = ({
  frame,
  setUsername,
  setCategories,
  setCategorySelected,
  setQuestions,
  setQuestionNo,
  setAnswers,
  setResultReturn,
  setRecords,
}) => {
  useEffect(() => {
    const getNewSetting = () => {
      setUsername("");
      setCategories([]);
      setCategorySelected(undefined);
      setQuestions([]);
      setQuestionNo(0);
      setAnswers([]);
      setResultReturn({});
      setRecords([]);
    };

    frame === "name" && getNewSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame]);

  return {};
};
