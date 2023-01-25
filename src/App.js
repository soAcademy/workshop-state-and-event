import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-teal-700 w-full">This is NavBar</div>
          <Routes>
            <Route exact path="/" element={<Home title="Hello Bond" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="products">
              <Route exact path="product1" element={<Product1 />} />
              <Route exact path="product2" element={<Product2 />} />
            </Route>
            <Route> exact path="*" element={<>404 Not Found</>} </Route>
          </Routes>

          <div className="bg-green-700 w-full">This is Footer</div>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
