import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Product2 from "./Pages/Products/Product2";
import Product1 from "./Pages/Products/Product1";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-black text-center text-white">Nav Bar</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home title="Home" />} />
          <Route path="about" element={<About title="About"/>} />
          <Route path="products" element={<Products title="Products"/>}>
            <Route path="product1" element={<Product1 />} />
            <Route path="product2" element={<Product2 />} />
          </Route>
        </Routes>
        <div className="bg-black text-center text-white fixed bottom-0 w-full">Footer</div>
      </BrowserRouter>
    </div>
  );
};
export default App;
