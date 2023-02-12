import { useState, useEffect } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";
// มีทำ Auto suggest โดยการใช้ onchange กับมีทำปุ่มไว้หน้าหลัก

const ZipcodeHome = ({
  provinces,
  setProvince,
  search,
  setSearch,
  searchDatas,
  setSearchDatas,
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
      <div className="w-1/3 mx-auto mt-4 relative ">
        <div className="w-full h-64 overflow-auto bg-white shadow text-left rounded-lg absolute top-0">
          <div className="font-bold px-4 pt-4">
            ผลลัพธ์การค้นหา {searchDatas.length} รายการ
          </div>
          <div className="text-sm text-gray-600">
            {searchDatas?.map((r, idx) => (
              <div
                key={idx}
                className="py-1 hover:cursor-pointer hover:bg-blue-100 active:bg-blue-200"
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
            onClick={() => setProvince(province)}
            className="cursor-pointer text-blue-500"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </>
);

//อันนี้คือหน้าหลัก
const ZipcodeProvince = ({ province, districts }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">
      รหัสไปรษณีย์ในจังหวัด {province}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

// อันนี้สร้าง Navbar เด้อ
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

//ตัวแม่ด้าน Component
const Zipcode8 = () => {
  const provincesArray = ThailandZipcodeData.map((r) => r.province);
  const provinces = [...new Set(provincesArray)];
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchDatas, setSearchDatas] = useState([]);

  useEffect(() => {
    const _districts = [
      ...new Map(
        ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
          r.district,
          r,
        ])
      ).values(),
    ];
    setDistricts(_districts);
  }, [province]);

  useEffect(() => {
    const _searchDatas = ThailandZipcodeData.filter(
      (r) =>
        r.province.includes(search) ||
        r.district.includes(search) ||
        r.subdistrict.includes(search) ||
        String(r.zipcode).includes(search)
    );
    setSearchDatas(_searchDatas);
  }, [search]);

  return (
    <div className="w-full text-center">
      <div className="mt-4">
        <ZipcodeNavBar province={province} setProvince={setProvince} />
      </div>
      {province === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setProvince={setProvince}
          search={search}
          setSearch={setSearch}
          searchDatas={searchDatas}
          setSearchDatas={setSearchDatas}
        />
      )}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts={districts} />
      )}
    </div>
  );
};
export default Zipcode8;
