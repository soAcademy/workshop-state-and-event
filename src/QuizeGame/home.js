import { useEffect, useState } from "react";
import axios from "axios";
import Confirm from "./confirmPopup";
import Question from "./question";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [mainToggle, setMainToggle] = useState(true);
  const [questionToggle, setQuestionToggle] = useState(false);
  const [selectCategory, setSelectCategory] = useState();
  const [user, setUser] = useState("Doreamon");

  //Get categories
  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/quizeGame/getCategories",
      headers: {},
    };
    axios(config).then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  }, []);
  console.log("category", category);

  //Select a category
  const selectCategoryQuestion = (categoriesId) => {
    console.log("categoriesId", categoriesId.id);
    const _data = JSON.stringify({
      quizeCategoryId: categoriesId.id,
    });
    console.log("_data:", _data);
    setSelectCategory(_data);
  };
  console.log("selectCategory>>>>", selectCategory);
  //Select a category
  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/quizeGame/getQuestionsByCategoryIdHandler",
      headers: {
        "Content-Type": "application/json",
      },
      data: selectCategory,
    };
    axios(config).then((res) => {
      console.log(">>>>>>>", res.data);
      setQuestion(res.data);
    });
  }, [toggle]);
  console.log("question:", question);

  return (
    <>
      {mainToggle && (
        <div className="w-screen h-screen bg-slate-400 mx-auto font-kanit ">
          <div className="text-4xl font-bold p-2 pt-5 text-center">
            QuizeGame
          </div>
          <div className="text-center font-bold text-xl"> เลือกหมวดคำถาม</div>
          <div className="mx-auto">
            {category.map((r) => (
              <div className="p-4  mx-auto">
                <div
                  className="w-full bg-red-200 text-2xl rounded-lg text-center  hover:bg-teal-200"
                  onClick={() => {
                    selectCategoryQuestion(r);
                    setToggle(true);
                  }}
                >
                  {r.name}
                </div>
              </div>
            ))}
          </div>
          {toggle && (
            <div>
              <Confirm
                toggle={toggle}
                setToggle={setToggle}
                mainToggle={mainToggle}
                setMainToggle={setMainToggle}
                questionToggle={questionToggle}
                setQuestionToggle={setQuestionToggle}
              />
            </div>
          )}
          <div className="mx-auto w-screen p-2">
            <div className="w-full px-5  mx-auto">
              <input
                className="w-full p-2 rounded-lg text-center "
                placeholder="ใส่ชื่อของคุณ"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
          </div>
          <div className="mx-auto w-full text-center">
            <div className="w-2/3 mx-auto">
              <button
                className="p-2 mx-auto w-full rounded-lg bg-yellow-200 font-bold text-xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
  
      {questionToggle && (
        <Question question={question} user={user} setUser={setUser} />
      )}
    </>
  );
};
export default Home;
