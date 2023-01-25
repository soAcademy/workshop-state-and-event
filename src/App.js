import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </BrowserRouter>
);
export default App;
