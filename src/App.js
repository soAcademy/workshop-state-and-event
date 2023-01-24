import React from "react";
import Prop1 from "./Props/Prop1";
import Prop2 from "./Props/Prop2";
import Prop3, { RenderComponent } from "./Props/Prop3";

function App() {
  return (
    <>
      <Prop1 data="Hello world" />
      <Prop2 data1="boeing" data2="mike" />
      <RenderComponent />
      <Prop3 />
    </>
  );
}

export default App;
