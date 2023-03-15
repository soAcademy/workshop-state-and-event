import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Tweet from "./Pages/Tweet";

const Twitter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/user/:id" element={<User />} />
      <Route path="/tweet/:id" element={<Tweet />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default Twitter;
