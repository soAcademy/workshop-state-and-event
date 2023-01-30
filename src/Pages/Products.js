import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div>Products Content is Here</div>
      <div>
        <Link className="ml-1 p-2 bg-gray-100" to="/products/product1">Product1</Link>
        <Link className="ml-1 p-2 bg-gray-100" to="/products/product2">Product2</Link>
      </div>
    </div>
  );
};

export default Products;
