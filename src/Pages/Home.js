import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Home</h1>
    <div>
      <Link to="/about">to about</Link>
    </div>
  </>
);

export default Home;
