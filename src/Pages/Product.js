import { Link, useParams } from "react-router-dom";
const Product = () => {
  const { productId } = useParams();
  return (
    <>
      <div>Product Content is Here</div>
      <div>Product Id : {productId}</div>
    </>
  );
};
export default Product;
