import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ProductPage from "./Pages/Products/ProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-black text-center text-white">Nav Bar</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home title="Home" />} />
          <Route path="About" element={<About title="About"/>} />
          <Route path="Products" element={<Products title="Products"/>}>
            <Route path="Product1" element={<ProductPage />} />
          </Route>
        </Routes>
        <div className="bg-black text-center text-white fixed bottom-0 w-full">Footer</div>
      </BrowserRouter>
    </div>
  );
};
export default App;
