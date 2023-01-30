import Event1 from "./Events/Event1";
import Event2 from "./Events/Event2";
import Event3 from "./Events/Event3";
import Event4 from "./Events/Event4";
import Event5 from "./Events/Event5";
import Event6 from "./Events/Event6";
import Event7 from "./Events/Event7";
import Event8 from "./Events/Event8";

import State1 from "./States/State1";
import State2 from "./States/State2";
import State3 from "./States/State3";
import State4 from "./States/State4";
import State5 from "./States/State5";
import State6 from "./States/State6";
import State7 from "./States/State7";

import Prop1 from "./Props/Prop1";
import Prop2 from "./Props/Prop2";
import Prop3 from "./Props/Prop3";
import Prop4 from "./Props/Prop4";

import Effect1 from "./Effects/Effect1";
import Effect1_1 from "./Effects/Effect1_1";
import Effect2 from "./Effects/Effect2";
import Effect3 from "./Effects/Effect3";
import Effect4 from "./Effects/Effect4";
import Effect5 from "./Effects/Effect5";
import Effect6 from "./Effects/Effect6";
import Effect7 from "./Effects/Effect7";

const App = () => {
  return (
    <div className="mx-2">
      <Event1 />
      <Event2 />
      <Event3 />
      <Event4 />
      <Event5 />
      <Event6 />
      <Event7 />
      <Event8 />

      <State1 />
      <State2 />
      <State3 />
      <State4 />
      <State5 />
      <State6 />
      <State7 />

      <Prop1 data="Hello World" />
      <Prop2 data1="Hello World" data2="Bin Bin Bin" />
      <Prop3 />
      <Prop4 />

      <Effect1 />
      <Effect1_1 />
      <Effect2 />
      <Effect3 />
      <Effect4 />
      <Effect5 />
      <Effect6 />
      <Effect7 />
    </div>
  );
};
export default App;