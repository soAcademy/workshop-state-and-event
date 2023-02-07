import AllZipCode from "./thailand-zipcode.json";
import { useState, useEffect } from "react";
import { FaRegCopy, FaTimes } from "react-icons/fa";

const ZipcodeHome = ({ setProvince, allDatas }) => {
  const [strSearch, setStrSearch] = useState("");
  const [suggest, setSuggest] = useState([]);

  // console.log(AllZipCode);
  const uniqueProvinces = [...new Set(allDatas?.map((r) => r.province))].sort();

  useEffect(() => {
    // console.log(allprovinces);
    const resultSuggest =
      strSearch.length >= 3
        ? allDatas.filter(
            (r) =>
              r.province.includes(strSearch) ||
              r.district.includes(strSearch) ||
              r.subdistrict.includes(strSearch) ||
              String(r.zipcode).includes(strSearch)
          )
        : [];

    setSuggest(resultSuggest);
  }, [allDatas, strSearch]);

  return (
    <div className="w-full md:w-3/4 mt-8">
      <div className="header w-full h-14 flex items-center justify-center mb-4">
        <h1 className="text-2xl">ค้นหารหัสไปรษณีย์</h1>
      </div>
      <div className="inputBlock w-full mb-6">
        <div className="relative w-full md:w-3/4 mx-auto">
          <input
            onChange={(e) => setStrSearch(e.target.value)}
            type="text"
            className="w-full h-14 bg-gray-100 border-2 border-gray-300 rounded-full px-4 pr-12"
            placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
            value={strSearch}
          />
          <button
            onClick={() => setStrSearch([])}
            className="absolute top-5 right-5"
          >
            <FaTimes />
          </button>
          {suggest.length > 0 && (
            <ul className="absolute top-15 w-full h-fit max-h-[300px] flex flex-col gap-y-2 bg-white border-2 rounded-lg overflow-y-auto z-10 shadow-lg">
              {suggest.map((r) => (
                <li
                  key={r.locationCode}
                  className="hover:text-gray-400 hover:bg-gray-100 p-2 px-4"
                >
                  <button
                    onClick={() => navigator.clipboard.writeText(r.zipcode)}
                    className="w-full flex justify-between"
                  >
                    <div className="text-left">
                      {r.subdistrict} / {r.district} / {r.province} {r.zipcode}
                    </div>
                    <div className="ml-4">
                      <FaRegCopy />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="header mb-6">
        <div className="md:grid grid-cols-4 gap-4">
          <h1 className="text-xl text-left md:text-center">เลือกจังหวัด</h1>
        </div>
      </div>
      <div className="provinceBlock">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {uniqueProvinces.map((province, idx) => (
            <button
              onClick={() => setProvince(province)}
              key={idx}
              className="text-center hover:text-blue-400 hover:underline "
            >
              {province}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ZipCodeDistrict = ({ province, districts }) => {
  // console.log(districts);
  return (
    <div className="w-full md:w-3/4 mt-8">
      <div className="header mb-6">
        <div className="w-full h-14 mb-6 flex items-center justify-center">
          <h1 className="text-xl ">รหัสไปรษณีย์ในจังหวัด {province}</h1>
        </div>
        <div className="tableBlock w-full flex justify-center">
          <table className="border-collapse bg-gray-50 border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2 px-4">#</th>
                <th className="border border-slate-300 p-2 px-4">อำเภอ/เขต</th>
                <th className="border border-slate-300 p-2 px-4">
                  รหัสไปรษณีย์
                </th>
                <th className="border border-slate-300 p-2 px-4">คัดลอก</th>
              </tr>
            </thead>
            <tbody>
              {districts.map((district, idx) => (
                <tr key={idx + 1}>
                  <td className="border border-slate-300 text-center p-2 px-4">
                    {idx + 1}
                  </td>
                  <td className="border border-slate-300 p-2 px-4">
                    {district.district}
                  </td>
                  <td className="border border-slate-300 text-center p-2 px-4">
                    {district.zipcode}
                  </td>
                  <td className="border border-slate-300">
                    <button
                      className="w-full h-full flex justify-center"
                      onClick={() =>
                        navigator.clipboard.writeText(district.zipcode)
                      }
                    >
                      <FaRegCopy />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Zipcode8 = () => {
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const newDistricts = [
      ...new Map(
        AllZipCode.filter((r) => r.province === province).map((r) => [
          r.district,
          r,
        ])
      ).values(),
    ];
    // console.log(newDistricts);

    setDistricts(newDistricts);
  }, [province]);

  return (
    <div className="w-full h-full flex justify-center font-prompt text-sm p-6">
      <NavBreadcrumb setProvince={setProvince} province={province} />

      {province === undefined && (
        <ZipcodeHome setProvince={setProvince} allDatas={AllZipCode} />
      )}
      {province !== undefined && (
        <ZipCodeDistrict province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode8;

const NavBreadcrumb = ({ province, setProvince }) => (
  <nav className="absolute top-0 left-0 flex p-4" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <button
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          onClick={() => setProvince()}
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          Home
        </button>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          {province}
        </div>
      </li>
    </ol>
  </nav>
);
