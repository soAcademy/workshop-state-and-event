import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currPath, setCurrPath] = useState("");
  // console.log(currPath);
  return (
    <nav className="w-full bg-zinc-200 border-b shadow-md p-4">
      <Link
        to="/"
        className={"rounded-lg mr-2 p-2 " + (currPath === "/" ? "underline" : "")}
        onClick={() => setCurrPath("/")}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={"rounded-lg mr-2 p-2 " + (currPath === "/about" ? "underline" : "")}
        onClick={() => setCurrPath("/about")}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
