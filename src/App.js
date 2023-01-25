import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-200 w-full h-24 text-center border pt-8">
      Nav Bar
    </div>
    <Routes>
      <Route exact path="/" element={<Home title="Hello Born" />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="products" element={<></>}>
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
    <div className="bg-blue-300 w-full h-24 text-center border pt-8">
      Footer
    </div>
  </BrowserRouter>
);
export default App;
