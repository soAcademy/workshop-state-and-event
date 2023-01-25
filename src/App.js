import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Products/Product1";
import Product2 from "./Pages/Products/Product2";
import Products from "./Pages/Products/Products";
const App = () => (
  <BrowserRouter>
    <div className="bg-red-200">Nav bar</div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route path="product">
        <Route path=":productId" element={<Products />} />
      </Route>

      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />}></Route>
        <Route exact path="product2" element={<Product2 />}></Route>
      </Route>
      <Route exact path="*" element={<>404 Not found</>}></Route>
    </Routes>
    <div className="bg-cyan-200">Footer</div>
  </BrowserRouter>
);
export default App;
