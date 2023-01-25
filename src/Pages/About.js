import { Link } from "react-router-dom";

const About = ({title}) => {
  document.title = title;
  return (
    <div className="font-bold text-[100px]">
      About 
    </div>
  );
};

export default About;
