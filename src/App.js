import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product from "./pages/Product";
import LocalStorage1 from "./LocalStorageAnswer/LocalStorage1";
import LocalStorage2 from "./LocalStorageAnswer/LocalStorage2";
import LocalStorage3 from "./LocalStorageAnswer/LocalStorage3";
import LocalStorage4 from "./LocalStorageAnswer/LocalStorage4";
import ToDoList1 from "./ToDoListAnswers/ToDoList1";
import ToDoList2 from "./ToDoListAnswers/ToDoList2";
import ToDoList3 from "./ToDoListAnswers/ToDoList3";
import ToDoList4 from "./ToDoListAnswers/ToDoList4";

const App = () => (
  <BrowserRouter>
    <div className="bg-sky-500 w-full">This is Navbar</div>
    <Routes>
      <Route exact path="/" element={<Home name="Hello Boeing" />} />
      <Route exact path="/about" element={<About />} />

      <Route path="Product">
        <Route path=":productId" element={<Product />} />
      </Route>
      {/* : ทำให้ useParam หา productId */}
      {/* //localhost:3000/Product/>>...<<  */}

      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />} />
        <Route exact path="product2" element={<Product2 />} />
      </Route>
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
    <div className="bg-green-500 w-full">This is footer</div>
  </BrowserRouter>
);
export default App;
