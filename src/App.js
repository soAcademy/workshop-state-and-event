import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product.js";
import Products from "./Pages/Products";
import Product1 from "./Pages/Products/product1";
import Product2 from "./Pages/Products/product2";

const App = () => (
  <>
    <nav className="bg-blue-300">this is nav bar</nav>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home title="Cake's page" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        
        <Route exact path="/product" element={<Product />} />
        <Route path="product">
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/product1" element={<Product1 />} />
        <Route exact path="/products/product2" element={<Product2 />} />
      </Routes>
    </BrowserRouter>
    <div className="bg-blue-400">this is footer</div>
  </>
);
export default App;
