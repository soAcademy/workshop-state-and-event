import { Link } from "react-router-dom";

const About = () => (
  <div>
    <Link to="/">
      Home
    </Link>{" "}
    |  <span className="underline ml-5">About</span>
  </div>
);

export default About;
