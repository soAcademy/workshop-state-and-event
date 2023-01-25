import { Link } from "react-router-dom";

const Product1 = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link>
      <span class="ml-3">
        <Link to="/about">About</Link>
      </span>
      <span class="underline ml-3">Product 1</span>
      <span class="ml-3">
        <Link to="/product2">Product 2</Link>
      </span>
    </div>
  );
};

export default Product1;
