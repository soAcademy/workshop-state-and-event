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
export default App;
