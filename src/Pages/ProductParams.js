// import { useParams } from "react-router-dom";

// const Product = () => {
//   const { productId } = useParams();

//   return <div>Product Id: {productId}</div>;
// };

// export default Product;


import { useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [inputId, setInputId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/product/${inputId}`);
  };

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg pl-3">
      <Link to="/">Home</Link>
      <span className="ml-3">
        <Link to="/about">About</Link>
      </span>
      <span className="ml-3">
        <Link to="/products">products</Link>
      </span>
      <span class="underline ml-3">Product Params</span>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            className="border border-black rounded-lg w-64 h-8 ml-4 mb-2"
          />
        </label>
        <button
          type="submit"
          className="bg-green-300 rounded w-1/12 p-2 ml-3 mt-2"
        >
          Submit
        </button>
      </form>
      <div className="text-lg">Product Id: {productId}</div>
    </div>
  );
};

export default Product;



