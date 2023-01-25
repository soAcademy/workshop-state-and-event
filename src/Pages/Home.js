import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="m-3">
      <span className="underline mr-3">Home</span>
      <Link to="/about">About</Link>
      <span class="ml-3">
        <Link to="/product1">Product 1</Link>
      </span>
      <span class="ml-3">
        <Link to="/product2">Product 2</Link>
      </span>
      <p>{props.message}</p>
    </div>
  );
};

export default Home;

///////////  destructuring

// const Home = ({ message }) => {
//   return (
//     <div className="m-3">
//       <span className="underline mr-3">Home</span>
//       <Link to="/about">About</Link>
//       <p>{message}</p>
//     </div>
//   )
// }
