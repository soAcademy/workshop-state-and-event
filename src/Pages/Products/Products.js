import { useParams } from "react-router-dom";

const Products = () => {
  const { productId } = useParams();
  return <div className="bg-indigo-200">Product Id:{productId}</div>;
};
export default Products;
