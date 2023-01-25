import { Link } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2";
import Product from "./Shop/Product";
import ProductPage from "./Products/ProductPage";

const Products = ({ title }) => {
  const location = useLocation();
  console.log(location);
  document.title = title;
  return (
    <div>
      <div className="w-[300px] bg-gray-300 h-[400px] mx-auto m-5">
        <div className="bg-gray-700 p-2 text-white font-bold">
          <Link
            to="product1"
            className={`${
              location.pathname === "/products/product1" ? "underline" : ""
            }`}
          >
            Product1
          </Link>{" "}
          |{" "}
          <Link
            to="product2"
            className={`${
              location.pathname === "/products/product2" ? "underline" : ""
            }`}
          >
            Product2
          </Link>
        </div>
        <Routes>
          <Route path="/Product/:productId" component={ProductPage} />
          {/* <Route path="product1" element={<Product1 />} />
          <Route path="product2" element={<Product2 />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Products;
