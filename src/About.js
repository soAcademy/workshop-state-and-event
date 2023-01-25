import {Link} from "react-router-dom";

const About = () => (
  <div>
    <Link to="/">Home</Link>{" "} | <span className="underline">About</span>
  </div>
)
export default About;








// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route exact path="/about" element={<About/>} />
//     </Routes>
//   </BrowserRouter>
// );
// export default App;
