import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link>
      <span class="underline ml-3">About</span>
      <span class="ml-3">
        <Link to="/products">Product</Link>
      </span>
      <span class="ml-3">
        <Link to="/product">Product Params</Link>
      </span>
      <p>This is About page</p>
    </div>
  );
};

export default About;
