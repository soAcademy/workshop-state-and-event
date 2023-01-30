import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Link to="/">Home</Link>
    <span className="px-5">|</span>
    <span className="underline">About</span>
    <span className="px-5">|</span>
    <Link to="/products">Products</Link>
    <span className="px-5">|</span>
  </div>
);

export default About;
