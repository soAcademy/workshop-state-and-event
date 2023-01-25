import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-200 w-full h-24 text-center border pt-8">
      Nav Bar
    </div>
    <Routes>
      <Route exact path="/" element={<Home title="Hello Born" />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    <div className="bg-blue-300 w-full h-24 text-center border pt-8">
      Footer
    </div>
  </BrowserRouter>
);
export default App;
