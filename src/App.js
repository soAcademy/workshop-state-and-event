import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PagesAnswer/Home";
import About from "./PagesAnswer/About";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-700 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home title="Hello Bin" />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    <div className="bg-green-700 w-full">This is Footer</div>
  </BrowserRouter>
);
export default App;
