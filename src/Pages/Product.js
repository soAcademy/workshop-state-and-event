import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return (
    <>
      <div className="text-center m-4 p-4">
        <p>This is Product id {productId} page</p>
      </div>
    </>
  );
};

export default Product;
