import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Navbar = ({ dataFilteredBySearchTerm, setDataFilteredBySearchTerm }) => {
  const _location = useLocation();
  const location = decodeURI(_location.pathname).split("/");

  return (
    <div className="font-kanit text-lg p-7 text-slate-500 z-20">
      {_location.pathname != "/" ? (
        <Link to="/" className="text-blue-500">หน้าแรก </Link>
      ) : (
        <p>หน้าแรก</p>
      )}
      {location[1] !== "" && location.length > 2 ? (
        <span>
          <span>/ </span>
          <Link to={`${"/" + location[1]}`} className="text-blue-500">
            {" "}
            {location[1]} &nbsp;
          </Link>
        </span>
      ) : location.length === 2 ? (
        location[1] !== "" ? (
          <span>/ {location[1]}</span>
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
        <span>/ {location[2]}</span>
      ) : (
        ""
      )}
      <SearchBar
        dataFilteredBySearchTerm={dataFilteredBySearchTerm}
        setDataFilteredBySearchTerm={setDataFilteredBySearchTerm}
      />
    </div>
  );
};
