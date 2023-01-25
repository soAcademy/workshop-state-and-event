import { Link } from "react-router-dom";

const Home = (props) => (
  <>
    <h1 className="text-lg">Home</h1>
    <div className="text-xl">{props.heading}</div>
    <div>
      <Link to="/about">to about</Link> |{" "}
      <Link to="/products/product1">to product1</Link> |{" "}
      <Link to="/products/product2">to product2</Link>
    </div>
  </>
);

export default Home;
