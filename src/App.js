<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product1 from "./Pages/Products/Product1";
import Product2 from "./Pages/Products/Product2";
import Products from "./Pages/Products/Products";

const App = () => (
      // <Home/>
  <BrowserRouter>
    <div className="bg-red-200">Nav bar</div>
    <Routes>
      <Route exact path="/" element={<Home />} />
       <Route exact path="/About" element={<About />} />
=======
import State3 from "./StatesAnswer/State3";
import LocalStorage1 from "./LocalStorageAnswer/LocalStorage1";
import LocalStorage2 from "./LocalStorageAnswer/LocalStorage2";
import LocalStorage3 from "./LocalStorageAnswer/LocalStorage3";
import LocalStorage4 from "./LocalStorageAnswer/LocalStorage4";
import ToDoList1 from "./ToDoListAnswers/ToDoList1";
import ToDoList2 from "./ToDoListAnswers/ToDoList2";
import ToDoList3 from "./ToDoListAnswers/ToDoList3";
import ToDoList4 from "./ToDoListAnswers/ToDoList4";

const App = () => {
  return (
    <>
      {/* <State3 /> */}
      {/* <LocalStorage1 /> */}
      {/* <LocalStorage2 /> */}
      <LocalStorage3 data1="bin" data2="hello"/>
      {/* <LocalStorage4 /> */}
      {/* <ToDoList1 /> */}
      {/* <ToDoList2 /> */}
      {/* <ToDoList3 /> */}
      {/* <ToDoList4 /> */}
    </>
  );
};
>>>>>>> b57e3ae62691892f9acbe897eefe3f6c0021ac7e

      <Route path="product">
        <Route path=":productId" element={<Products />} />
      </Route>

      <Route exact path="products">
        <Route exact path="product1" element={<Product1 />}></Route>
        <Route exact path="product2" element={<Product2 />}></Route>
      </Route> 
      <Route exact path="*" element={<>404 Not found</>}></Route>
    </Routes>
    <div className="bg-cyan-200">Footer</div>
  </BrowserRouter>
);
export default App;
