import { Link } from "react-router-dom";

const About = () => {
  return (
  <div>
    <Link to="/">Home</Link>{" "}
    |  <span className="underline">About</span>
  </div>
);
};

export default About;


// const About = () => (
//   <div>
//     <Link to="/">
//       Home
//     </Link>{" "}
//     |  <span className="underline">About</span>
//   </div>
// );

// export default About;
