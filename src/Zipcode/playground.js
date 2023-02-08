import ThailandZipcodeData from "./thailand-zipcode.json";
import { useState, useEffect } from "react";

const Ziphome = ({
  provinces,
  setProvince,
  search,
  setSearch,
  searchData,
  setSearchData,
}) => {
  return (
    <>
      {/* {console.log(">>>>>>>>",province)} */}
      <h1 className="text-2xl mt-2 font-bold text-center">ค้นหารหัสไปรษณีย์</h1>
      <div className="w-1/3 mx-auto">
        <input
          type="text"
          className="border-2 border-slate-500 w-full rounded-lg py-2 "
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {search !== undefined && search.length >= 3 && (
        <div className="w-1/3 mx-auto bg-slate-500 relative">
          <div className="w-full h-64 absolute top-0 right-0 bg-slate-300 text-left pl-2 overflow-auto">
            <div className="w-full  bg-slate-300">
              ผลลัพธ์การค้นหา {searchData.length} รายการ
            </div>
            {searchData.map((r) => {
              return (
                <>
                  <div  onClick={()=>navigator.clipboard.writeText(r.zipcode)} 
                        className="w-full hover:cursor-pointer hover:bg-teal-300 active:bg-red-200">
                    {" "}
                    ต.{r.subdistrict} อ.{r.district} จังหวัด{r.province}{" "}
                    {r.zipcode}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}

      <div className=" bg-slate-400 rounded-lg p-2 mt-2 w-2/3 mx-auto">
        <h2 className="font-bold pl-5">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 m-4 pl-2 ">
          {provinces.map((sendProvince) => {
            return (
              <>
                {" "}
                <div
                  onClick={() => setProvince(sendProvince)}
                  className="cursor-pointer hover:bg-white"
                >
                  {sendProvince}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ZipcodeProvince = ({ province, districts }) => {
  return (
    <>
      {console.log("province", province, "districts", districts)}
      <h1 className="text-2xl pt-3 font-bold text-center">
        รหัสไปรษณีย์ในจังหวัด {province}
      </h1>
      <div className="w-screen text-center mt-2">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg w-1/3 p-2 mx-auto"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="w-2/3 mx-auto bg-gray-100 mt-8 rounded-lg text-left">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-center border border-slate-300 ">#</th>
              <th className="text-center border border-slate-300 p-2">อำเภอ</th>
              <th className="text-center border border-slate-300 p-2">
                รหัสไปรษณีย์
              </th>
            </tr>
          </thead>
          <tbody>
            {districts?.map((r, idx) => (
              <tr>
                <th className="text-center border border-slate-300">
                  {idx + 1}
                </th>
                <th className="pl-2 border border-slate-300">{r.district}</th>
                <th className="text-center border border-slate-300">
                  {r.zipcode}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const ZipNavBar = ({ setProvince, province }) => {
  return (
    <>
      <div className="w-full text-center">
        <div onClick={() => setProvince(undefined)} className="mx-auto ">
          <span className="text-blue cursor-pointer">หน้าแรก/</span>
          {province !== undefined && <span>{province}</span>}
        </div>
      </div>
    </>
  );
};
const ZipApp = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];

  const [province, setProvince] = useState();
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const _searchData = ThailandZipcodeData.filter(
      (r)=>
      r.province.includes(search) ||
      r.district.includes(search) ||
      r.subdistrict.includes(search) ||
      String(r.zipcode).includes(search)
      );
      setSearchData(_searchData);
  },[search])

  const districts = [
    ...new Map(
      ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
        r.district,
        r,
      ])
    ).values(),
  ];

  // {console.log("555555555555")}
  return (
    <div>
      {console.log("6666666666666")}
      <ZipNavBar setProvince={setProvince} province={province} />
      {province === undefined && (
        <Ziphome
          provinces={provinces}
          setProvince={setProvince}
          search={search}
          setSearch={setSearch}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      )}

      {province !== undefined && (
        <ZipcodeProvince province={province} districts={districts} />
      )}
    </div>
  );
};
export default ZipApp;
