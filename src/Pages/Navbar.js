import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-black text-center text-white">
      <Link
        to="/home"
        className={`${
          location.pathname === "/" || location.pathname === "/home"
            ? "underline"
            : ""
        }`}
      >
        Home
      </Link>{" "}
      |{" "}
      <Link
        to="/about"
        className={`${location.pathname === "/about" ? "underline" : ""}`}
      >
        About
      </Link>{" "}
      |{" "}
      <Link
        to="/products"
        className={`${location.pathname.startsWith("/products") ? "underline" : ""}`}
      >
        Products
      </Link>{" "}
    </div>
  );
};

export default Navbar;
