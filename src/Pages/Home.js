import { Link } from "react-router-dom";

const Home = (props) => {
  return (
  <>
  <div> {props.title} </div>
    {/* <span className="underline">Home</span> |{" "} */}
    <Link to="/" className="p-4 bg-teal-700 hover:bg-red-500">Home</Link>
    <Link to="/about" className="p-4 bg-teal-700 hover:bg-red-500">About</Link>
    <Link to="/products/product1" className="p-4 bg-teal-700 hover:bg-red-500">Product1</Link>
    <Link to="/products/product2" className="p-4 bg-teal-700 hover:bg-red-500">Product2</Link>
  </>
);
};
export default Home;

// const Home = () => (
//   <div>
//     <span className="underline">Home</span> |{" "}
//     <Link to="/about">About</Link>
//   </div>
// );
// export default Home;