// // import Event1 from "./Events/Event1";
// // import Event2 from "./Events/Event2";
// // import Event3 from "./Events/Event3";
// // import Event4 from "./Events/Event4";
// // import Event5 from "./Events/Event5";
// // import Event6 from "./Events/Event6";
// // import Event7 from "./Events/Event7";
// // import Event8 from "./Events/Event8";

// // import State1 from "./States/State1";
// // import State2 from "./States/State2";
// // import State3 from "./States/State3";
// // import State4 from "./States/State4";
// // import State5 from "./States/State5";
// // import State6 from "./States/State6";
// // import State7 from "./States/State7";

// // import Prop1 from "./Props/Prop1";
// // import Prop2 from "./Props/Prop2";
// // import Prop3 from "./Props/Prop3";
// import Prop4 from "./Props/Prop4";

// // import Effect1 from "./Effects/Effect1";
// // import Effect1_1 from "./Effects/Effect1_1";
// // import Effect2 from "./Effects/Effect2";
// // import Effect3 from "./Effects/Effect3";
// // import Effect4 from "./Effects/Effect4";
// // import Effect5 from "./Effects/Effect5";
// const App = () => {
//   return (
//     <div>
//       {/* <Event1 /> */}
//       {/* <Event2 /> */}
//       {/* <Event3 /> */}
//       {/* <Event4 /> */}
//       {/* <Event5/> */}
//       {/* <Event6 /> */}
//       {/* <Event7 /> */}
//       {/* <Event8 /> */}
//       {/* <State1 /> */}
//       {/* <State2 /> */}
//       {/* <State3 /> */}
//       {/* <State4/> */}
//       {/* <State5/> */}
//       {/* <State6/> */}
//       {/* <State7 /> */}
//       {/* <Prop1 data={"Hello World"}/> */}
//       {/* <Prop3 /> */}
//       <Prop4/>
//       {/* <Effect1/> */}
//       {/* <Effect1_1/> */}
//       {/* <Effect2/> */}
//       {/* <Effect3/> */}
//       {/* <Effect4/> */}
//       {/* <Effect5/> */}
//     </div>
//   );
// };
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";

const App = () => (
  <BrowserRouter>
    <div className="bg-red-300 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home title="Best Price Shop" />} />
      <Route exact path="/about" element={<About />} />
      {/* <Route exact path="/product" element={<></>} /> */}
      <Route exact path="/products" element={<ProductList/>} />
      <Route path="product">
        <Route path=":productId" element={<Product />}/>
      </Route>
      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
    <div className="bg-red-300 w-full">This is Footer</div>
  </BrowserRouter>
);
export default App;
