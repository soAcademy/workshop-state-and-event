import { useState, useEffect } from "react";
import thailandZipCodeDatas from "./thailand-zipcode.json";

const ZipcodeHome = ({
  provinces,
  setProvince,
  showSuggestBox,
  setSearchInput,
  searchSuggestions,
}) => (
  <div className="w-full text-center">
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="Search here"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {showSuggestBox && (
        <div className="rounded-lg w-1/3 mx-auto mt-1 relative">
          <div className="w-full h-64 overflow-auto bg-red-200  shadow text-left rounded-lg absolute top-0">
            <div className="font-bold px-4 pt-4">
              ผลลัพธ์การค้นหา {searchSuggestions.length} รายการ
            </div>
            <div className="text-sm text-gray-600">
              {searchSuggestions?.map((result, index) => (
                <div
                  key={index}
                  className=" border-b border-gray-400 py-1 hover:cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                  onClick={() => navigator.clipboard.writeText(result.zipcode)}
                >
                  <span className="px-4">
                    {" "}
                    ต.{result.subdistrict} อ.{result.district} จ.
                    {result.province} {result.zipcode}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">Select Province</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div
            onClick={() => setProvince(province)}
            className="cursor-pointer text-blue-500"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ZipcodeByProvince = ({ province, districts }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold text-center">
      รหัสไปรษณีย์ในจังหวัด {province}
    </h1>
    <div className="text-center">
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
      />
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <table className="w-full">
        <thead>
          <tr className="text-center font-bold border-collapse">
            <th className="border border-slate-300 p-2">#</th>
            <th className="border border-slate-300 p-2">อำเภอ/เขต</th>
            <th className="border border-slate-300 p-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {districts.map((r, idx) => (
            <tr key={idx}>
              <td className="border border-slate-300 text-center p-2">
                {idx + 1}
              </td>
              <td className="border border-slate-300 p-2">{r.district}</td>
              <td className="border border-slate-300 text-center p-2">
                {r.zipcode}
                {"  "}

                <button
                  className="bg-gray-100 text-blue-500 cursor-pointer active:text-blue-300"
                  onClick={() => navigator.clipboard.writeText(r.zipcode)}
                >
                  คัดลอก
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const ZipcodeNavBar = ({ province, setProvince }) => (
  <div>
    <span
      className="text-blue-500 cursor-pointer"
      onClick={() => setProvince(undefined)}
    >
      หน้าแรก
    </span>
    {province !== undefined && (
      <span className="text-gray-500"> / {province}</span>
    )}
  </div>
);

// ==== MAIN COMPONENT BELOW ====
const Zipcode8 = () => {
  const provinces = [
    ...new Set(thailandZipCodeDatas.map((_province) => _province.province)),
  ];

  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);

  const [searchInput, setSearchInput] = useState()
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestBox, setShowSuggestBox] = useState(false);

  useEffect(() => {
    const _dist = thailandZipCodeDatas
      .filter((r) => r.province === province)
      .map((r) => [r.district, r]);
    console.log("distx : ", _dist);

    const _districts = [
      ...new Map(
        thailandZipCodeDatas
          .filter((r) => r.province === province)
          .map((r) => [r.district, r])
      ).values(),
    ];

    setDistricts(_districts);
  }, [province]);

  useEffect(() => {
    if (searchInput?.length >= 3) {
      const _searchSuggestions = thailandZipCodeDatas.filter(
        (r) =>
          r.province.includes(searchInput) ||
          r.district.includes(searchInput) ||
          r.subdistrict.includes(searchInput) ||
          String(r.zipcode).includes(searchInput)
      );
      setSearchSuggestions(_searchSuggestions);

      setShowSuggestBox(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestBox(false);
    }
  }, [searchInput]);

  return (
    <>
      <div className="w-full text-center">
        <div className="mt-4">
          <ZipcodeNavBar province={province} setProvince={setProvince} />
        </div>
        {province === undefined && (
          <ZipcodeHome
            provinces={provinces}
            setProvince={setProvince}
            setSearchInput={setSearchInput}
            searchSuggestions={searchSuggestions}
            showSuggestBox={showSuggestBox}
          />
        )}
        {province !== undefined && (
          <ZipcodeByProvince province={province} districts={districts} />
        )}
      </div>
    </>
  );
};

export default Zipcode8;
