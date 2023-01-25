import { Link } from "react-router-dom";

const Home = ({title}) => {
  document.title = title;
  console.log(title);
  return (
    <div>
      <span className="underline">Home</span> | <Link to="/about">About</Link> | <Link to="/products">Products</Link>
    </div>

  );
};

export default Home;
