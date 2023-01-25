import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> | <Link to="/product">Product</Link> |{" "}
      <span className="underline">Products</span>
      <div>
        <Link to="/products/product1">Product1</Link>
        <Link to="/products/product2">Product2</Link>
      </div>
    </div>
  );
};

export default Products;
