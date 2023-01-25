import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PagesAnswer/Home";
import About from "./PagesAnswer/About";
import Product from "./PagesAnswer/Product";
import Product1 from "./PagesAnswer/Product1";
import Product2 from "./PagesAnswer/Product2";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-700 w-full">This is Navbar</div>
    <Routes>
      <Route
        exact
        path=""
        element={<Home title="Hello Bin" name2="Hello Name2" />}
      />
      <Route exact path="about" element={<About />} />
      {/* <Route exact path="/products/product1" element={<Product1 />} />
      <Route exact path="/products/product2" element={<Product2 />} /> */}

      <Route path="product">
        <Route path=":productId" element={<Product />} />
      </Route>

      <Route exact path="products" element={<div>Products</div>} />
      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
    <div className="bg-green-700 w-full">This is Footer</div>
  </BrowserRouter>
);
export default App;
