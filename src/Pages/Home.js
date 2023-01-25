import { Link } from "react-router-dom";

const Home = (props) => (
  <>
    <h1 className="text-lg">Home</h1>
    <div className="text-xl">{props.heading}</div>
    <div>
      <Link to="/about">to about</Link>
    </div>
  </>
);

export default Home;
