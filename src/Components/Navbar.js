import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-200 p-4">
      <Link to="/" className="mr-4">home</Link>
      <Link to="/about" className="mr-4">about</Link>
    </nav>
  );
};

export default Navbar;
