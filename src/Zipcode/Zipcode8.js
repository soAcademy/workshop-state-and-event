import { useState, useEffect } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = ({
  provinces,
  setSelectedProvince,
  setSearch,
  search,
  searchResult,
}) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    {search !== undefined && search.length >= 3 && (
      <div className="w-1/3 mx-auto mt-4 relative">
        <div className="w-full h-64 overflow-auto bg-white shadow text-left rounded-lg absolute top-0">
          <div className="font-bold px-4 pt-4">
            ผลลัพธ์การค้นหา {searchResult.length} รายการ
          </div>
          <div className="text-sm text-gray-600">
            {searchResult?.map((r, idx) => (
              <div
                className="py-1 hover:cursor-pointer hover:bg-blue-100"
                key={idx}
                onClick={() => navigator.clipboard.writeText(r.zipcode)}
              >
                <span className="px-4">
                  ต.{r.subdistrict} อ.{r.district} จ.{r.province} {r.zipcode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div
            onClick={() => setSelectedProvince(province)}
            className="cursor-pointer"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeProvince = ({ selectedProvince, districts }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">
      รหัสไปรษณีย์ในจังหวัด {selectedProvince}
    </h1>
    <div>
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
            <th className="border bg-green-700 border-white p-2">#</th>
            <th className="border bg-green-700 border-white p-2">อำเภอ/เขต</th>
            <th className="border bg-green-700 border-white p-2">
              รหัสไปรษณีย์
            </th>
          </tr>
        </thead>
        <tbody>
          {districts?.map((r, idx) => (
            <tr key={idx}>
              <td className="border bg-green-500 border-white text-center p-2">
                {idx + 1}
              </td>
              <td className="border bg-green-500 border-white p-2">
                {r.district}
              </td>
              <td className="border bg-green-500 border-white text-center p-2">
                {r.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const ZipcodeNavBar = ({ selectedProvince, setSelectedProvince }) => (
  <div>
    <span
      onClick={() => setSelectedProvince(undefined)}
      className="cursor-pointer text-blue-500"
    >
      หน้าแรก
    </span>
    {selectedProvince !== undefined && (
      <span className="text-gray-500">/ {selectedProvince}</span>
    )}
  </div>
);

const Zipcode8 = () => {
  const [selectedProvince, setSelectedProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();

  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];

  useEffect(() => {
    const _districts = [
      ...new Map(
        ThailandZipcodeData.filter((r) => r.province === selectedProvince).map(
          (r) => [r.district, r]
        )
      ).values(),
    ];
    setDistricts(_districts);
  }, [selectedProvince]);

  useEffect(() => {
    const _searchResult = ThailandZipcodeData.filter(
      (r) =>
        r.province.includes(search) ||
        r.district.includes(search) ||
        r.subdistrict.includes(search) ||
        String(r.zipcode).includes(search)
    );
    setSearchResult(_searchResult);
  }, [search]);

  return (
    <div className="w-full text-center">
      <div className="mt-4">
        <ZipcodeNavBar
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
        />
      </div>

      {selectedProvince === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setSelectedProvince={setSelectedProvince}
          search={search}
          setSearch={setSearch}
          searchResult={searchResult}
        />
      )}

      {selectedProvince !== undefined && (
        <ZipcodeProvince
          selectedProvince={selectedProvince}
          districts={districts}
        />
      )}
    </div>
  );
};

export default Zipcode8;
