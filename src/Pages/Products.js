import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link>
      <span className="ml-3">
        <Link to="/about">About</Link>
      </span>
      <span class="underline ml-3">Products</span>
      <span class="ml-3">
        <Link to="/product">Product Params</Link>
      </span>
      <div className="mt-2">
        <Link to="/products/product1" className=" hover:underline">Product 1</Link>
        <span class="ml-3">
          <Link to="/products/product2" className="hover:underline">Product 2</Link>
        </span>
      </div>
    </div>
  );
};

export default Product;
