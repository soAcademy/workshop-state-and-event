import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product2 from "./Product2";
import Product1 from "./Product1";
import Product from "./Product";
import { Link } from "react-router-dom";
import LocalStorage1 from "./localstorages/LocalStorage1";

const App = () => (
  
  <LocalStorage1 />
);

export default App;

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route exact path="/about" element={<About/>} />
//     </Routes>
//   </BrowserRouter>
// );
// export default App;
