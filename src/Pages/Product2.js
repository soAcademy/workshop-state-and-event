import { Link } from "react-router-dom";

const Product2 = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link>
      <span class="ml-3">
        <Link to="/about">About</Link>
      </span>
      <span class="ml-3">
        <Link to="/product 1">Product 1</Link>
      </span>
      <span class="underline ml-3">Product 2</span>
    </div>
  );
};

export default Product2;
