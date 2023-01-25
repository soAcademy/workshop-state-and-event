import { Link } from "react-router-dom";

const Home = (props) => (
  <div>
    <div>{props.title}</div>
    <div>{props.name2}</div>
    <span className="underline ml-5">
      Home
      </span> |{" "}
    <span className="px-4" >|</span>
      <Link to="/about">
      About
      </Link><span className="px-4" >|</span>
      <Link to="/product/product1">
        Product1
      </Link><span className="px-4" >|</span>
      <Link to="/product/product2">
        Product2
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


