import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <span className="underline">Home</span> | <Link to="/about">About</Link>
    <span className="px-4">|</span>
    <Link to="/products/product1">Product1</Link>
    <span className="px-4">|</span>
    <Link to="/products/product2">Product2</Link>
  </div>
);

export default Home;
