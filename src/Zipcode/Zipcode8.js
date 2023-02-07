import { useState, useEffect } from "react";
import zipcodeList from "./thailand-zipcode.json";

const ZipcodeNavbar = ({ province, setProvince }) => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li
        className="inline-flex items-center"
        aria-current={province === undefined ? "page" : undefined}
      >
        <button
          onClick={() => setProvince(undefined)}
          className="text-blue-600"
        >
          หน้าแรก
        </button>
      </li>
      {province !== undefined && (
        <li className="inline-flex items-center" aria-current="page">
          / <button className="ml-1 md:ml-3">{province}</button>
        </li>
      )}
    </ol>
  </nav>
);

const ZipcodeHome = ({
  provinces,
  setProvince,
  setSearchInput,
  searchResults,
}) => {
  const [isSearchResultsDropdownOpen, toggleSearchResultsDropdown] =
    useState(false);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.length >= 3 ? e.target.value : undefined);
    toggleSearchResultsDropdown(e.target.value.length >= 3 ? true : false);
  };

  const handleResultEntryClick = async (zipcode) => {
    try {
      await navigator.clipboard.writeText(zipcode);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative">
      <h1 className="font-2xl mb-2 text-center font-bold">ค้นหารหัสไปรษณีย์</h1>
      <input
        type="text"
        onChange={(e) => handleSearchInputChange(e)}
        className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-nstl text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
      />
      <div
        className={`absolute w-full rounded-lg border border-gray-200 bg-white font-nstl text-sm font-medium text-gray-900 shadow shadow-slate-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white ${
          isSearchResultsDropdownOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
          {searchResults.length > 0
            ? `ผลการค้นหา ${searchResults.length} รายการ`
            : "ไม่พบผลการค้นหา"}
        </div>
        <div className="h-48 overflow-y-auto">
          {searchResults.map((result, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleResultEntryClick(result.zipcode)}
              className="w-full cursor-pointer border-b border-gray-200 px-4 py-2 text-left font-medium text-blue-600 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
            >
              {result.province} {result.district} {result.subdistrict}{" "}
              {result.zipcode}
            </button>
          ))}
        </div>
      </div>
      <h2 className="font-xl mb-2 font-bold">เลือกจังหวัด</h2>
      <ul className="grid grid-cols-4 gap-2">
        {provinces.map((province, idx) => (
          <li key={idx} className="font-nstl">
            <button
              onClick={() => setProvince(province)}
              className="text-blue-600"
            >
              {province}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ZipcodeProvince = ({ province, districtListForProvince }) => {
  // const ZipcodeListforProvince = (province) =>
  //   zipcodeList.filter((item) => item.province === province);
  return (
    <>
      <h1 className="font-2xl mb-2 text-center font-bold">
        รหัสไปรษณีย์ใน{province === "กรุงเทพมหานคร" ? "" : "จังหวัด"}
        {province}
      </h1>
      <table className="w-full text-left font-nstl text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">
              {province === "กรุงเทพมหานคร" ? "เขต" : "อำเภอ"}
            </th>
            <th className="px-6 py-3">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {/* {zipcodeList
            .filter((item) => item.province === province) */}
          {districtListForProvince.map((item, idx) => (
            <tr
              key={idx}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <td className="px-6 py-4">
                {item.district}
                {/* {item.district} {item.subdistrict} */}
              </td>
              <td className="px-6 py-4">{item.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Zipcode8 = () => {
  const [province, setProvince] = useState();
  const [districtListForProvince, setDistrictListForProvince] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const _districtListForProvince = [
      ...new Map(
        zipcodeList
          .filter((item) => item.province === province)
          .map((item) => [item.district, item])
      ).values(),
    ].sort((a, b) =>
      a.district.localeCompare(b.district, "th", { ignorePunctuation: true })
    );
    setDistrictListForProvince(_districtListForProvince);
  }, [province]);

  useEffect(() => {
    const _searchResults = zipcodeList.filter(
      (item) =>
        item.province.includes(searchInput) ||
        item.district.includes(searchInput) ||
        item.subdistrict.includes(searchInput) ||
        String(item.zipcode).includes(searchInput)
    );

    setSearchResults(_searchResults);
  }, [searchInput]);

  // const provinces = [...new Set(zipcodeList.map((item) => item.province))].sort(
  //   (a, b) => a.localeCompare(b, "th", { ignorePunctuation: true })
  // );

  // console.log(zipcodeList.filter((item) => item.province === "กรุงเทพมหานคร"));

  // const districtListForProvince = (province) =>
  //   [
  //     ...new Map(
  //       zipcodeList
  //         .filter((item) => item.province === province)
  //         .map((item) => [item.district, item])
  //     ).values(),
  //   ].sort((a, b) =>
  //     a.district.localeCompare(b.district, "th", { ignorePunctuation: true })
  //   );

  // console.log(districtListForProvince("กรุงเทพมหานคร"));

  return (
    <>
      <ZipcodeNavbar province={province} setProvince={setProvince} />
      {province === undefined && (
        <ZipcodeHome
          provinces={[
            ...new Set(zipcodeList.map((item) => item.province)),
          ].sort((a, b) =>
            a.localeCompare(b, "th", { ignorePunctuation: true })
          )}
          setProvince={setProvince}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchResults={searchResults}
        />
      )}
      {province !== undefined && (
        <ZipcodeProvince
          province={province}
          // districtListForProvince={districtListForProvince(province)}
          districtListForProvince={districtListForProvince}
        />
      )}
    </>
  );
};

export default Zipcode8;
