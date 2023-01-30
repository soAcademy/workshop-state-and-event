import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product.js";
import Products from "./Pages/Products";
import Product1 from "./Pages/Products/product1";
import Product2 from "./Pages/Products/product2";

const App = () => (
  <>
    <BrowserRouter>
      <div className="bg-blue-300">
        <Link className="ml-1 p-2 hover:text-blue-500" to="/">
          Home
        </Link>
        <Link className="ml-1 p-2 hover:text-blue-500" to="/about">
          About
        </Link>
        <Link className="ml-1 p-2 hover:text-blue-500" to="/contact">
          Contact
        </Link>
        <Link className="ml-1 p-2 hover:text-blue-500" to="/product">
          Product
        </Link>
        <Link className="ml-1 p-2 hover:text-blue-500" to="/products">
          Products
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home title="Cake's page" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:productId" element={<Product />} />
        {/* <Route path="/product">
          <Route path=":productId" element={<Product />} />
        </Route> */}
        {/* Nested Router แบบที่ 1 */}
        {/* <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/product1" element={<Product1 />} />
        <Route exact path="/products/product2" element={<Product2 />} /> */}
        {/* Nested Router แบบที่ 2 */}
        <Route exact path="/products" element={<Products />} />{" "}
        {/* ความหมายคือ ถ้าวิ่งผ่าน path /products(ตั้งชื่อเองได้เลย) จะวิ่งไปเข้าหน้าของ element{<Compenent/>} ที่เราต้องการไป */}
        <Route exact path="/products">
          <Route exact path="/products/product1" element={<Product1 />} />
          <Route exact path="/products/product2" element={<Product2 />} />
        </Route>
        <Route exact path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
    <div className="bg-blue-400">this is footer</div>
  </>
);
export default App;

//By P Bin
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./PagesAnswer/Home";
// import About from "./PagesAnswer/About";
// import Product from "./PagesAnswer/Product";
// import Product1 from "./PagesAnswer/Product1";
// import Product2 from "./PagesAnswer/Product2";

// const App = () => (
//   <BrowserRouter>
//     <div className="bg-red-700 w-full">This is Navbar</div>
//     <Routes>
//       <Route
//         exact
//         path=""
//         element={<Home title="Hello Bin" name2="Hello Name2" />}
//       />
//       <Route exact path="about" element={<About />} />
//       {/* <Route exact path="/products/product1" element={<Product1 />} />
//       <Route exact path="/products/product2" element={<Product2 />} /> */}

//       <Route path="product">
//         <Route path=":productId" element={<Product />} />
//       </Route>

//       <Route exact path="products" element={<div>Products</div>} />
//       <Route exact path="products">
//         <Route exact path="product1" element={<Product1 />} />
//         <Route exact path="product2" element={<Product2 />} />
//       </Route>
//       <Route exact path="*" element={<>404 Not found</>} />
//     </Routes>
//     <div className="bg-green-700 w-full">This is Footer</div>
//   </BrowserRouter>
// );
