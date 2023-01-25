import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/Home">Home</Link> | <span className="underline">About</span> | <Link to="/Products">Products</Link>
    </div>
  );
};

export default About;
