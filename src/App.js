import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
  <BrowserRouter>
    <div className="bg-sky-500 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home name="Hello Boeing" />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    <div className="bg-green-500 w-full">This is footer</div>
  </BrowserRouter>
);
export default App;
