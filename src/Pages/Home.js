import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="m-3">
      <span className="underline mr-3">Home</span>
      <Link to="/about">About</Link>
      <p>{props.title}</p>
    </div>
  )
}

export default Home;