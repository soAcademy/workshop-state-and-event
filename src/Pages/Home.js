import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <span className="underline">Home</span> | <Link to="/About">About</Link> | <Link to="/Products">Products</Link>
    </div>

  );
};

export default Home;
