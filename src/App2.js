import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product2 from "./Product2";
import Product1 from "./Product1";
import Product from "./Product";
import { Link } from "react-router-dom";

const App = () => (
  
  <BrowserRouter>
    <div className="bg-green-300">
    <span className="underline px-2">Home</span> 
    <span className="px-2">|</span>
    <Link to="/about">About</Link>
    <span className="px-2">|</span>
    <Link to="/products/product1">product1</Link>
    <span className="px-2">|</span>
    <Link to="/products/product2">product2</Link>
    <span className="px-2">|</span>
    <Link to="/product/productId">product</Link>
    </div>
    <Routes>
      <Route exact path="" element={<Home title="My name is Teak" />} />
      <Route exact path="about" element={<About />} />

      <Route path="product">
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route exact path="products" element={<div>Products</div>} />
      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not Found</>} />
    </Routes>
    

    <div className="bg-red-300">Footer</div>
  
  
  </BrowserRouter>
      
  //   <Routes>
  //     <Route exact path="" element={<Home title="My name is Teak" />} />
  //     <Route exact path="about" element={<About />} />

  //     <Route path="product">
  //       <Route path=":productId" element={<Product />} />
  //     </Route>
  //     <Route exact path="products" element={<div>Products</div>} />
  //     <Route exact path="products">
  //       <Route exact path="product1" element={<Product1 />} />
  //       <Route exact path="product2" element={<Product2 />} />
  //     </Route>
  //     <Route exact path="*" element={<>404 Not Found</>} />
  //   </Routes>
  //   <div className="bg-red-300">Footer</div>
  // </BrowserRouter>
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
