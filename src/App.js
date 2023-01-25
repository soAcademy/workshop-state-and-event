import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
export default App;
