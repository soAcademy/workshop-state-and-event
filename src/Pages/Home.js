import { Link} from "react-router-dom";
import Test from "../TestJSON/Test";
import Practise from "../TestJSON/Practise";
import State77 from "../States/state7";   
import State1 from "../States/state1";

const Home =()=>(
  <div>
    <div className="bg-slate-200">dew</div>
    <div className="bg-slate-400">kad</div>

    <span className="underline">Home</span>|{""}
    <Link to="/products/product1">Product1</Link>|{""}
    <Link to="/products/product2">Product2</Link>|{""}
    <Link to="/product/:productId">ProductId</Link>|{""}
    <Link to="/about">About</Link>
    {/* <State77/> */}

    
  </div>
);
export default Home;