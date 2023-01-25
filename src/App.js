import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product2 from "./Product2";
import Product1 from "./Product1";

const App = () => (
  <BrowserRouter>
    <div className="bg-green-300">NavBar</div>
    <Routes>
      <Route exact path="" element={<Home title="My name is Teak" />} />
      <Route exact path="about" element={<About />} />
    
      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not Found</>} />
    </Routes>
    <div className="bg-red-300">Footer</div>
  </BrowserRouter>
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
