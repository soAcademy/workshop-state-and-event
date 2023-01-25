import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => (
  <>
    <nav className="bg-blue-300">this is nav bar</nav>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home title="Cake's page"/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  <div className="bg-blue-400">this is footer</div>
  </>

);
export default App;
