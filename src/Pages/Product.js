import { Link , useParams } from "react-router-dom";
const Product = () => {
  const { productId } = useParams();
  return<>
    <div>
      {" "}
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> | <Link to="/product">Product</Link> |{" "}
      <Link to="/products">Products</Link>
    </div>
    <div>Product Id : {productId}</div>
  </>
};
export default Product;
