import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Products/ProductPage";

const Products = ({title}) => {
  document.title = title;
  return (
    <div>
      <Link to="/Home">Home</Link> | <Link to="/About">About</Link> |{" "}
      <span className="underline">Products</span>
      <div className="w-[300px] bg-gray-300 h-[400px]">
        <Link to="Product1">Product1</Link> |{" "}
        <Link to="Product2">Product2</Link>
      </div>
    </div>
  );
};

export default Products;
