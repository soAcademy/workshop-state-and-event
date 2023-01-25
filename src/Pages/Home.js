import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
const Home = (props) => {
  return (
  <>
  <div> {props.title} </div>
    {/* <span className="underline">Home</span> |{" "}
    <div className="container mt-2 mb-2">
    <Link to="/" className="p-2 bg-teal-700 hover:bg-red-500">Home</Link>
    <Link to="/about" className="p-2 bg-teal-700 hover:bg-red-500">About</Link>
    <Link to="/products/product" className="p-2 bg-teal-700 hover:bg-red-500">Product</Link>
    <Link to="/products/product1" className="p-2 bg-teal-700 hover:bg-red-500">Product1</Link>
    <Link to="/products/product2" className="p-2 bg-teal-700 hover:bg-red-500">Product2</Link>
    </div> */}
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

// const Home = () => {
// return (
//   <>
// <Route
// exact
// path="/"
// element={<Home title="Hello Bond" name2="BKK" />}
// />
// </>
// );
// };

// export default Home;