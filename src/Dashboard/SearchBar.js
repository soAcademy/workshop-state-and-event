import zipcodeData from "./thailand-zipcode.json";
import { Link } from "react-router-dom";
const SearchBar = ({
  dataFilteredBySearchTerm,
  setDataFilteredBySearchTerm,
}) => {
  const filterData = (searchTerm) => {
    return zipcodeData.filter(
      (data) =>
        data.province.includes(searchTerm) ||
        data.district.includes(searchTerm) ||
        data.subdistrict.includes(searchTerm) ||
        String(data.zipcode).includes(searchTerm)
    );
  };
  return (
    <div className="flex flex-col justify-center m-10 font-kanit z-20">
      <p className="mx-auto p-10 text-2xl font-bold">ค้นหารหัสไปรษณีย์</p>
      <form id="search">
        <input
          onChange={(e) => {
            e.target.value !== "" && e.target.value.length >= 3
              ? setDataFilteredBySearchTerm(filterData(e.target.value))
              : setDataFilteredBySearchTerm();
          }}
          onFocus={(e)=>setDataFilteredBySearchTerm(filterData(e.target.value))}
          onBlur={()=>setDataFilteredBySearchTerm()}
          placeholder="ค้นหา ตำบล อำเภอ"
          className="border-2 px-8 py-2 focus:outline-blue-400 rounded w-full"
        ></input>
      </form>
      {dataFilteredBySearchTerm && (
        <div className="border px-6 py-2 bg-white max-h-80 overflow-scroll z-20">
          {dataFilteredBySearchTerm.map((data, idx) => {
            return (
              <Link
                id={idx}
                to={`/${data.province}/${data.district}`}
                onClick={() => {
                  document.querySelector("#search").reset();
                  setDataFilteredBySearchTerm();
                }}
              >
                <div className="flex space-x-2 py-2 px-2 hover:bg-gray-200 rounded">
                  <p>
                    {data.province === "กรุงเทพมหานคร" ? "แขวง" : "ต."}
                    {data.subdistrict}
                  </p>
                  <p>{data.district}</p>
                  <p>{data.province}</p>
                  <p>{data.zipcode}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
