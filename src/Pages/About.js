import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Link to="/">Home</Link> | <span className="underline">About</span> |{" "}
    <Link to="/contact">Contact</Link>
  </div>
);

export default About;
