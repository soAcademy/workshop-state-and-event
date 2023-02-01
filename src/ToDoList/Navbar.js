// import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";


  const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const routes = [
    { name: "-", url: "/" },
    { name: "-", url: "/order" },
  ];

  return (
    <>

    
      <div className="  h-full w-12 shadow flex bg-gradient-to-t
                    from-blue-400 to-sky-800" style={{position: "fixed", top: "0", zIndex: "1"}} >
      {toggle && (
        <div className="w-full bg-white shadow"  style={{position: "absolute", top: "48px", zIndex: "1"}}>
          {routes.map((route) => (
            <Link to ={route.url}>
            <div className="py-2 pl-2 active:bg-blue-100">{route.name}</div>
            </Link>
          ))}
        </div>
      )}
        <div onClick={() => setToggle(!toggle)}>
        <AiFillMediumCircle className="h-10 mr-5 mt-2 text-5xl"  />
          {/* <img src={More} className="h-8 ml-2 mt-2" /> */}
        </div>
        
      </div>
      
    </>
  );
};

export default NavBar;