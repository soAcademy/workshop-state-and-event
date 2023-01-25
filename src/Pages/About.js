import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link>
      <span class="underline ml-3">About</span>
      <span class="ml-3">
        <Link to="/product1">Product 1</Link>
      </span>
      <span class="ml-3">
        <Link to="/product2">Product 2</Link>
      </span>
    </div>
  );
};

export default About;
