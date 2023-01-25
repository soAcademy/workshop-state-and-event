import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-3">
      <Link to="/">Home</Link><span class="underline ml-3">About</span>
    </div>
  );
};

export default About;
