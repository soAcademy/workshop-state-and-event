import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    {" "}
    <span className="underline">Home</span> | <Link to="/about">About</Link> |{" "}
    <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link>
    <p>{props.title}</p>
  </div>
);

export default Home;
