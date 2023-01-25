import { Link } from "react-router-dom";

const Home = (props) => (
  <>
    <div>
      <span className="underline">Home</span> | <Link to="/about">About</Link> |{" "}
      <Link to="products/product1">Product 1</Link> |{" "}
      <Link to="products/product2">Product 2</Link>
    </div>
    <div>{props.title}</div>
  </>
);

export default Home;
