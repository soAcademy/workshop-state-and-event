import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <span className="underline mr-5">Home </span> |{" "}
    <Link to="/about">About</Link>
  </div>
);

export default Home;
