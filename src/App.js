import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PagesAnswer/Home";
import About from "./PagesAnswer/About";

const App = () => 
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />p{" "}
    </Routes>
  </BrowserRouter>;

export default App;
