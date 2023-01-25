import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <span className="underline ml-5">
      Home
      </span> |{" "}
      <Link to="/about">
      About
      </Link>
  </div>
);


export default Home;

// const Home = () => (
//   <div>
//     <span className="underline">
//       Home
//       </span> |{" "}
//       <Link to="/about">
//       About
//       </Link>
//   </div>
// );


