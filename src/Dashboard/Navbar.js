import { computeHeadingLevel } from "@testing-library/react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const _location = useLocation();
  const location = decodeURI(_location.pathname).split("/");
  console.log(location);
  return (
    <div className="font-kanit text-lg p-7 text-blue-500">
      {_location.pathname != "/" ? (
        <Link to="/">หน้าแรก </Link>
      ) : (
        <p className="text-slate-500">หน้าแรก</p>
      )}
      {location[1] !== "" && location.length > 2 ? (
        <span>
          <span className="text-slate-500">/{" "}</span>
          <Link to={`${"/" + location[1]}`} className="text-blue-500">
            {" "}
            {location[1]} &nbsp;
          </Link>
        </span>
      ) : location.length === 2 ? (
        location[1] !== "" ? (
          <span className="text-slate-500">/ {location[1]}</span>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {location[1] !== "" && location.length > 3 ? (
        <Link to={`${"/" + location[1] + "/" + location[2]}`} className="">
          / {location[2]}
        </Link>
      ) : location.length === 3 ? (
        <span className="text-slate-500">/ {location[2]}</span>
      ) : (
        ""
      )}
    </div>
  );
};
export default Navbar;
