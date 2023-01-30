import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <span className="underline px-2">Home</span> 
    <span className="px-2">|</span>
    <Link to="/about">About</Link>
    <span className="px-2">|</span>
    <Link to="/products/product1">product1</Link>
    <span className="px-2">|</span>
    <Link to="/products/product2">product2</Link>
    <span className="px-2">|</span>
    <Link to="/product/productId">product</Link>
  </div>
);
export default Home;
