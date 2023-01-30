import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
import Product3 from "./Pages/Product3";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-teal-700 w-full">
            <Link to="/" className="p-2 bg-teal-700 hover:bg-red-500">
              Home
            </Link>
            <Link to="/about" className="p-2 bg-teal-700 hover:bg-red-500">
              About
            </Link>
            <Link to="/products" className="p-2 bg-teal-700 hover:bg-red-500">
              Products
            </Link>
            <Link
              to="/products/product"
              className="p-2 bg-teal-700 hover:bg-red-500"
            >
              Product
            </Link>
            <Link
              to="/products/product1"
              className="p-2 bg-teal-700 hover:bg-red-500"
            >
              Product1
            </Link>
            <Link
              to="/products/product2"
              className="p-2 bg-teal-700 hover:bg-red-500"
            >
              Product2
            </Link>
            <Link
              to="/products/product3"
              className="p-2 bg-teal-700 hover:bg-red-500"
            >
              Product3
            </Link>
          </div>

          {/* ของจริง nested route เราตัวนี้ไปใส่ใน Resume แทน*/}
          <Routes>
            <Route
              exact
              path="/"
              element={<Home title="Hello Bond" name2="BKK" />}
            />
            <Route exact path="/about" element={<About />} />

            <Route exact path="products">
              <Route exact path="product1" element={<Product1 />} />
              <Route exact path="product2" element={<Product2 />} />
              <Route exact path="product3" element={<Product3 />} />
            </Route>
            <Route exact path="product">
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route exact path="*" element={<>404 Not Found</>} />
          </Routes>
          {/* ของจริง */}
          
          <div className="bg-green-700 w-full">This is Footer</div>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
