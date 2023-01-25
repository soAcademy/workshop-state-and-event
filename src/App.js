import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";

const App = () => (
  <BrowserRouter>
    <div className="bg-sky-500 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home name="Hello Boeing" />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
    <div className="bg-green-500 w-full">This is footer</div>
  </BrowserRouter>
);
export default App;
