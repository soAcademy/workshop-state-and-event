import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product1 from "./Products/Product1";

const Products = ({ title }) => {
  document.title = title;
  return (
    <div>
      <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
      <span className="underline">Products</span>
      <div className="w-[300px] bg-gray-300 h-[400px]">
        <Link to="product1">Product1</Link> |{" "}
        <Link to="product2">Product2</Link>
      </div>
    </div>
  );
};

export default Products;
