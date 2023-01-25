import { Link, useParams } from "react-router-dom";

const Product = () => {
  const {productId} = useParams();

  return (
  <>
    <h1 className="text-lg">Product ID: {productId}</h1>
    <div>
      <Link to="/">to home</Link>
    </div>
  </>
)};

export default Product;
