import { Link } from "react-router-dom";

const About = () => (
    <div>
      <Link to="/" >
      Home
      </Link>&nbsp;
      | <span className="underline">
        About
        </span>
    </div>
);

// ml-5 ใช้สำหรับเว้นช่องเหมือนกด spacebar
// &nbsp; ใช้เหมือนการวรรคแบบ spacebar

export default About;

// const About = () => (
//   <div>
//     <Link to="/" >
//     Home
//     </Link>{" "}
//     | <span className="underline">
//       About
//       </span>
//   </div> 
// );








// const About = () => (
//   <div>
//     <Link to="/">
//       Home
//     </Link>{" "}
//     |  <span className="underline">About</span>
//   </div>
// );

// export default About;