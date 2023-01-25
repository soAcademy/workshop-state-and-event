import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.name}</div>
    <span className="underline">Home</span> | <Link to="/about">About</Link>
  </div>
);

export default Home;
