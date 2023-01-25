import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      Product Id: {productId}
    </div>
  );
};

export default ProductPage;
