import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Product1 from "./Pages/Products/Product1";
import Product2 from "./Pages/Products/Product2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />}>
            <Route path="Product1" element={<Product1 />} />
            <Route path="Product2" element={<Product2 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
