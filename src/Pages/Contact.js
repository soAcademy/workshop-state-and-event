import { Link } from "react-router-dom";

const About = () => (
  <div>
    {" "}
    <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
    <span className="underline">Contact</span> |{" "}
    <Link to="/product">Product</Link> | <Link to="/products">Products</Link>
  </div>
);

export default About;
