import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PagesAnswer/Home";
import About from "./PagesAnswer/About";
import Product1 from "./PagesAnswer/Product1";
import Product2 from "./PagesAnswer/Product2";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-700 w-full">This is Navbar</div>
    <Routes>
      <Route
        exact
        path="/"
        element={<Home title="Hello Bin" name2="Hello Name2" />}
      />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/products/product1" element={<Product1 />} />
      <Route exact path="/products/product2" element={<Product2 />} />
    </Routes>
    <div className="bg-green-700 w-full">This is Footer</div>
  </BrowserRouter>
);
export default App;
