import { Link } from "react-router-dom";

const Home = ({title}) => {
  document.title = "Home";
  return (
    <div className="font-bold text-[100px]">
      Home Page
    </div>

  );
};

export default Home;
