import { Link } from "react-router-dom";
const ProductList = () => (
  <div>
    <Link to="/">Home</Link>
    <span className="px-5">|</span>
    <span className="underline">About</span>
    <span className="px-5">|</span>
    <div>
      <Link to="/products/product1">Product1</Link>
      <span className="px-5">|</span>
      <Link to="/products/product2">Product2</Link>
    </div>
  </div>
);

export default ProductList;
