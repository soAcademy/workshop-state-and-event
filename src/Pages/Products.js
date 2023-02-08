import { Routes, Route, useLocation, Link } from "react-router-dom";
import ProductPage from "./Products/ProductPage";

const Products = ({ title }) => {
  const location = useLocation();
  document.title = title;
  return (
    <div>
      <div className="w-[300px] bg-gray-300 h-[400px] mx-auto m-5">
        <div className="bg-gray-700 p-2 text-white font-bold">
          <Link
            to="1"
            className={`${
              location.pathname === "/products/product1" ? "underline" : ""
            }`}
          >
            Product1
          </Link>{" "}
          |{" "}
          <Link
            to="2"
            className={`${
              location.pathname === "/products/product2" ? "underline" : ""
            }`}
          >
            Product2
          </Link>
        </div>
        <Routes>
          <Route path=":productId" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Products;
