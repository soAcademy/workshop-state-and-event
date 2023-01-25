import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <span className="underline">Home</span> | <Link to="/About">About</Link>
    </div>
    
  );
};

export default Home;
