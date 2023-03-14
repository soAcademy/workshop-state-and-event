import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);

  console.log("selectCategory", selectCategory);

  const getCategoryFromApi = async () => {
    try {
      const result = await axios.post("http://localhost:3100/getCategory");
      console.log("CategoryFromApi", result.data);
      setCategory(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryFromApi();
  }, []);

  return (
    <div className=" bg-slate-200 h-screen">
      <div className="text-center pt-10">
        <p className="text-2xl font-semibold">QUIZ TRIVIA GAMES</p>
      </div>
      <div className="text-center pt-12">
        <p className="text-lg">Press to select a category.</p>
      </div>

      <div className="flex justify-center w-full">
        {category && (
          <div className="flex flex-col space-y-5 pt-10">
            {category.map((r, idx) => (
              <button
                key={idx}
                className="text-xl cursor-pointer w-72 border-4 border-white bg-purple-700 text-white rounded-md p-5 hover:bg-purple-500"
                onClick={() => setSelectCategory(r.id)}
              >
                {r.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
