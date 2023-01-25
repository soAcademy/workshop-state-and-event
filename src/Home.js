import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <span className="underline">Home</span> | {" "}
    <Link to="/about">About</Link>
  </div>
);
export default Home;

