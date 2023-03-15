import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { TestUser } from "./Pages/TestUser";
import { Hashtag } from "./Pages/Hashtag";
import { Hashtags } from "./Pages/Hashtags";
import { NewPost } from "./Pages/NewPost";
import { FaPlusCircle } from "react-icons/fa";

export const ContextUserId = createContext();

export const Twitter = () => {
  const [userId, setUserId] = useState(1);
  const [currUserData, setCurrUserData] = useState([]);

  useEffect(() => {
    const data = JSON.stringify({
      id: userId,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/twitter/getUserProfile",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setCurrUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId]);

  return (
    <BrowserRouter>
      <ContextUserId.Provider
        value={{ userId, setUserId, currUserData, setCurrUserData }}
      >
        <div className="w-full h-screen flex justify-center bg-slate-100 font-prompt text-sm md:py-4">
          <div id="scroll" className="w-full md:w-1/2 bg-white overflow-y-auto">
            <div className="flex justify-center ">
              <Navbar />
              <div className="w-full p-4 pt-20">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/profile/:id" element={<Profile />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/testUser" element={<TestUser />} />
                  <Route exact path="/newPost" element={<NewPost />} />
                  <Route exact path="/hashtag/:id" element={<Hashtag />} />
                  <Route exact path="/hashtags" element={<Hashtags />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 md:bottom-8 right-4 md:right-[27%] flex justify-end text-slate-300 text-4xl">
            <Link to={"/newPost"} className="">
              <FaPlusCircle className="" />
            </Link>
          </div>
        </div>
      </ContextUserId.Provider>
    </BrowserRouter>
  );
};
