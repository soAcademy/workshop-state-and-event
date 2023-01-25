import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
const App = () => (
  <BrowserRouter>
    <div className="bg-red-200">Nav bar</div>
    <Routes>
      <Route
        exact
        path="/"
        element={<Home title="My name is Dew" location="BKK" />}
      />
      <Route exact path="/about" element={<About tel="093-537-2883" />} />
      <Route exact path="products" >
        <Route exact path="product1" element={<Product1 />}></Route>
        <Route exact path="product2" element={<Product2 />}></Route>
      </Route>
      <Route exact path="*" element={<>404 Not found</>}></Route>
    </Routes>
    <div className="bg-cyan-200">Footer</div>
  </BrowserRouter>
);
export default App;
