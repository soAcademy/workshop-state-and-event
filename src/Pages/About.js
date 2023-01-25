import { Link } from "react-router-dom";

const About = ({title}) => {
  document.title = title;
  return (
    <div>
      <Link to="/home">Home</Link> | <span className="underline">About</span> | <Link to="/products">Products</Link>
    </div>
  );
};

export default About;
