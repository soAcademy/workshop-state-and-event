import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";

const App = () => (
  <BrowserRouter>
    <div className="bg-green-400 w-full"> This is Navbar </div>
    <Routes>
      <Route
        exact
        path=""
        element={<Home title="Hello Ball" name2="Poovares" />}
      />
      <Route exact path="about" element={<About />} />
      <Route exact path="products" element={<></>} >
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>Products </>} />
    </Routes>
    <div className="bg-yellow-400 w-full">This is Footer</div>
  </BrowserRouter>
);
export default App;
