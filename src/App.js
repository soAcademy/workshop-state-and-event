// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./PagesAnswer/Home";
// import About from "./PagesAnswer/About";

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route exact path="/about" element={<About/>} />
//     </Routes>
//   </BrowserRouter>
// );
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
