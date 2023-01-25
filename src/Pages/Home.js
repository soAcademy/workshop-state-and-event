import { Link } from "react-router-dom";

const Home = (props) => (
  <>
    <div>
      <span className="underline">Home</span> | <Link to="/about">About</Link>
    </div>
    <div>{props.title}</div>
  </>
);

export default Home;
