import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Link to="/" className="hover:text-blue-300">
      Home
    </Link>{" "}
    | <span className="underline">About</span>
  </div>
);

export default About;
