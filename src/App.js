// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./PagesAnswer/Home";
// import About from "./PagesAnswer/About";

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route exact path="/about" element={<About/>} />
//     </Routes>
//   </BrowserRouter>
// );
// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="text-center bg-stone-100 shadow-lg w-full">Navbar</div>
      <Routes>
        <Route exact path="/" element={<Home message="Hello World!" />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <div className="text-center bg-stone-100 w-full">Footer</div>
    </BrowserRouter>
  );
};

export default App;
