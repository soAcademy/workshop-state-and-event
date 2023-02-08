import { useState, useEffect } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

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
    {search !== undefined && search.length >=3 &&( <div className="w-1/3 bg-slate-500 mx-auto relative">
      <div className="w-full h-64 bg-slate-300 absolute top-0 text-left pl-2 overflow-auto ">
        <div className="font-bold px-4 pt-4">
          ผลลัพธ์การค้นหา {searchDatas.length} รายการ
        </div>
        <div className="text-sm text-gray-600">
        {searchDatas?.map((r,idx) => {
          return (
              <div className="py-1 hover:cursor-pointer hover:bg-teal-300 active:bg-teal-400"
                   onClick={()=>navigator.clipboard.writeText(r.zipcode)}
                   key={idx}  >
                <span className="pl-4">
                  {" "}
                  ตำบล{r.subdistrict} อำเภอ{r.district} จังหวัด {r.province}{" "}
                  {r.zipcode}
                </span>
              </div>
          );
        })}
        </div>
      </div>
    </div>)}
    

    <div className="w-2/3 mx-auto bg-gray-200 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div
            onClick={() => setProvince(province)}
            className="cursor-pointer hover:bg-red-200 text-blue-800"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeProvince = ({ province, districts }) => (
  <>
    {console.log("province", province, "districts", districts)}

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

const ZipcodeNavBar = ({ province, setProvince }) => (
  <div>
    <span
      onClick={() => setProvince(undefined)}
      className="text-blue-500 cursor-pointer"
    >
      หน้าแรก/
    </span>
    {province !== undefined && <span>{province}</span>}
  </div>
);

const Zipcode8 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))]; // 77 provinces
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchDatas, setSearchDatas] = useState([]);

  useEffect(() => {
    const _districts = [
      ...new Map(ThailandZipcodeData.filter((r) => r.province === province).map((r) => [r.district,r,])).values(),
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
   
      <ZipcodeNavBar province={province} setProvince={setProvince} />
      {province === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setProvince={setProvince}
          search={search}
          setSearch={setSearch}
          searchDatas={searchDatas}
          setSearchDatas={setSearchDatas}
        /> //Click = close setProvince = ()
      )}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode8;
