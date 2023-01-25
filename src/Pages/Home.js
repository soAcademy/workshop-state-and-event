import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="m-3">
      <span className="underline mr-3">Home</span>
      <Link to="/about">About</Link>
      <p>{props.message}</p>
    </div>
  )
}

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