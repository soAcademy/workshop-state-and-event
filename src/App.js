import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => (
  <BrowserRouter>
    <div className="bg-green-400 w-full"> This is Navbar </div>
    <Routes>
      <Route exact path="/" element={<Home title="Hello Ball" name2="Poovares" />}
      />
      <Route exact path="/about" element={<About/>} />
    </Routes>
    <div className="bg-yellow-400 w-full" >This is Footer</div>
  </BrowserRouter>
);
export default App