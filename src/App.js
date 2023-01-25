<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-teal-700 w-full">This is NavBar</div>
          <Routes>
            <Route exact path="/" element={<Home title="Hello Bond" />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <div className="bg-green-700 w-full">This is Footer</div>
        </BrowserRouter>
      </div>
    </>
  );
};
=======
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
>>>>>>> 4913f41ad49e3c9f0ac5ba0950390306440576c3
export default App;
