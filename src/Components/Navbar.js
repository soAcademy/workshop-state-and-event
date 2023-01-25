import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currPath, setCurrPath] = useState("/");
  // console.log(currPath);

  const pageBtn = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/products/product1", name: "Product1" },
    { url: "/products/product2", name: "Product2" },
  ];
  // console.log(pageBtn.map((r) => r));

  useEffect(() => {
    const newPath = window.location.pathname;
    setCurrPath(newPath);
  }, []);

  return (
    <nav className="w-full bg-zinc-200 border-b shadow-md p-4">
      {pageBtn.map((r, idx) => {
        return (
          <Link
            key={idx}
            to={r.url}
            className={
              "rounded-lg mr-2 p-2 " + (currPath === r.url ? "underline" : "")
            }
            onClick={() => setCurrPath(r.url)}
          >
            {r.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
