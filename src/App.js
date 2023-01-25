import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PagesAnswer/Home";
import About from "./PagesAnswer/About";

const App = () => (
  <BrowserRouter>
  <div className="bg-red-700 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home title= "I'm Korayut" />} />
      <Route exact path="/about" element={<About />} />p{" "}
    </Routes>
    <div className="bg-yellow-300 w-full">This is footer</div>
  </BrowserRouter>
);

export default App;
