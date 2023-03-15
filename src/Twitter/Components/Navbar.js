import { useContext } from "react";
import "../scroll.css";
import { Link } from "react-router-dom";
import { ContextUserId } from "../twitter";
import { FaHome, FaSignOutAlt, FaHashtag } from "react-icons/fa";

export const Navbar = () => {
  const { currUserData } = useContext(ContextUserId);

  return (
    <div className="fixed top-0 md:top-4 w-full md:w-1/2 flex justify-between z-10 bg-white shadow-md px-4 p-2">
      <div className="flex">
        <Link to={"/"} className="flex items-center mr-4">
          <FaHome className="text-2xl text-slate-500" />
        </Link>
        <Link to={"/hashtags"} className="flex items-center">
          <FaHashtag className="text-xl text-slate-500" />
        </Link>
      </div>
      <div className="flex">
        <Link to="/testUser" className="flex items-center mr-4">
          <FaSignOutAlt className="text-md text-slate-500 text-xl" />
        </Link>
        <Link to={"/profile"} className="p-2">
          {/* {currUserData.username} */}
          <img
            className="h-[30px] aspect-[1/1] object-cover rounded-full"
            src={currUserData.image}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
