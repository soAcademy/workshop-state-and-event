import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Link to ="/about">About</Link> <span className="underline">Home</span>
  </div>
);

export default Home;
