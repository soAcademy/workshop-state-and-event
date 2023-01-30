import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
<<<<<<< HEAD
    <span className="underline">Home</span>
    <span className="px-4">|</span>
    <Link to="/about" className="p-4 text-red-500 hover:text-blue-500">
      About
    </Link>
    <span className="px-4">|</span>
    <Link
      to="/products/product1"
      className="p-4 text-red-500 hover:text-blue-500"
    >
      Product1
    </Link>
    <span className="px-4">|</span>
    <Link
      to="/products/product2"
      className="p-4 text-red-500 hover:text-blue-500"
    >
      Product2
    </Link>
    <span className="px-4">|</span>
    <Link to="/product/p1234" className="p-4 text-red-500 hover:text-blue-500">
      Product
=======
    <div>{props.name2}</div>
    <span className="underline">Home</span>
    <span className="px-4">|</span>
    <Link to="/about">
      About
    </Link><span className="px-4">|</span>
    <Link to="/products/product1">
      Product1
    </Link><span className="px-4">|</span>
    <Link to="/products/product2">
    Product2
>>>>>>> b69c46b322a4a7fe9e943c1c42cea48a4a0865ff
    </Link>
  </div>
);

export default Home;
