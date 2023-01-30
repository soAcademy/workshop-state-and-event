import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      Product Id: {productId}
      {productId === '1' && <p>Product1 Content</p>}
      {productId === '2' && <p>Product2 Content</p>}
    </div>
  );
};

export default ProductPage;
