import { Link} from "react-router-dom";

const Home =(props)=>(
  <div>
    <div className="bg-slate-200">{props.title}</div>
    <div className="bg-slate-400">{props.location}</div>

    <span className="underline">Home</span>|{""}
    <Link to="/products/product1">Product1</Link>|{""}
    <Link to="/products/product2">Product2</Link>|{""}
    <Link to="/about">About</Link>
    
  </div>
);
export default Home;