import { Link } from "react-router-dom";

const Home = (props) => (
  <>
    <div>
      <span className="underline">Home</span> |{" "}
      <Link to="/about" className="hover:text-blue-300">
        About
      </Link>{" "}
      |{" "}
      <Link to="products/product1" className="hover:text-blue-300">
        Product 1
      </Link>{" "}
      |{" "}
      <Link to="products/product2" className="hover:text-blue-300">
        Product 2
      </Link>
      |{" "}
      <Link to="product/test1234" className="hover:text-blue-300">
        Test1234
      </Link>
    </div>
    <div>{props.title}</div>
  </>
);

export default Home;
