import React, { useEffect, useState } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = (props) => {
  const { provincesUnique, setProvince, setSearch, searchData } = props;
  console.log("searchData", searchData);
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="text-sky-600 border-2 border-sky-600 shadow-lg rounded-lg py-2 px-5 mt-4 w-1/3 mx-auto"
            placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          />
        </div>
        {searchData.length > 0 && (
          <div className="bg-sky-100 w-1/3 flex justify-center relative mx-auto">
            <div
              className="absolute top-0 overflow-auto bg-white py-3 rounded-[10px] w-full
             h-[200px]"
            >
              {searchData.map((r) => {
                return (
                  <div className="text-sky-700">
                    {r.subdistrict},{r.district},{r.province},{r.zipcode},
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="w-2/3 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mt-8 rounded-lg text-left shadow-lg">
          <h2 className="bg-white ml-3 border border-sky-600 rounded-lg shadow-lg flex justify-center">
            เลือกจังหวัดที่ต้องการ
          </h2>
          <div className="grid grid-cols-4 mt-5">
            {provincesUnique.map((province, idx) => (
              <div
                onClick={() => setProvince(province)}
                className="flex justify-center text-white cursor-pointer hover:bg-white hover:text-black hover:rounded-[10px]"
                key={idx}
              >
                {province}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const ZipcodeProvince = (props) => {
  const { districts, province, setProvince } = props;
  return (
    <>
      <div className="mt-12">
        {/* /////////////////////////// */}
        <div>
          <span
            className="bg-blue-500 p-2 rounded-[10px] text-white cursor-pointer underline "
            onClick={() => setProvince(undefined)}
          >
            กลับไปหน้าแรก
          </span>
          {province !== undefined && (
            <span className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] p-2 ml-3 ">
              จังหวัดที่เลือก : {province}
            </span>
          )}
        </div>
        {/* /////////////////////////// */}
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-2xl pt-3 font-bold">
            รหัสไปรษณีย์ในจังหวัด {province}
          </h1>
        </div>
        <div className="w-2/3 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 p-4 mt-8 rounded-lg text-left">
          <table className="w-full">
            <thead>
              <tr className="text-center font-bold border-collapse">
                <th className="border border-slate-300 p-2 text-white">#</th>
                <th className="border border-slate-300 p-2 text-white">
                  อำเภอ/เขต
                </th>
                <th className="border border-slate-300 p-2 text-white">
                  รหัสไปรษณีย์
                </th>
              </tr>
            </thead>
            <tbody>
              {districts.map((r, idx) => (
                <tr key={idx}>
                  <td className="border border-slate-300 text-center p-2 text-white">
                    {idx + 1}
                  </td>
                  <td className="border border-slate-300 p-2 text-white">
                    {r.district}
                  </td>
                  <td className="border border-slate-300 text-center p-2 text-white">
                    {r.zipcode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// const DropdownInput = () => {
//   return (
//     <>
//       <div>dropdown</div>
//     </>
//   );
// };

const Zipcode8 = () => {
  // const provincess = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const provinces = ThailandZipcodeData.map((r) => r.province);
  const provincesUnique = [...new Set(provinces)];
  // const province = "กรุงเทพมหานคร";
  // -------------------------------
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const tempDistrict = [
      ...new Map(
        ThailandZipcodeData.filter((item) => item.province === province).map(
          (r) => [r.district, r]
        )
      ).values(),
    ];
    setDistricts(tempDistrict);
  }, [province]);
  // กด province แล้วตัว UseEffect จะไป Trigger กับ district ด้วยทำให้ตัว useEffect render ตัว district

  // new Set()
  // [...new Set([1,1,2,2,3,3])]
  // output = [1,2,3]

  // new Map()
  // [...new Map(["key1","value1"],["key2","value2"]).values()]
  // output = [{key,value}]
  // เลือกใช้เพราะว่าเราต้องการ out put ที่เป็น Array of Object

  // flatMap() เขียนแบบ shortcut ที่รวบรวม flat กับ map แล้วเขียนทีเดียว
  useEffect(() => {
    // add logic พืมพ์ 3 ตัวแล้วเสริชขึ้น
    if (search.length === 0) {
      setSearchData([]);
    }
    if (search.length >= 3) {
      const tempSearchData = ThailandZipcodeData.filter((r) => {
        return (
          r.province.includes(search) ||
          r.district.includes(search) ||
          r.subdistrict.includes(search) ||
          String(r.zipcode).includes(search)
        );
      });
      console.log("tempSearchData", tempSearchData);
      setSearchData(tempSearchData);
    }
  }, [search]);

  return (
    <>
      <div className="w-full text-center">
        {province === undefined && (
          <ZipcodeHome
            searchData={searchData}
            setSearch={setSearch}
            provincesUnique={provincesUnique}
            setProvince={setProvince}
          />
        )}
        {province !== undefined && (
          <ZipcodeProvince
            districts={districts}
            setProvince={setProvince}
            province={province}
          />
        )}
      </div>
    </>
  );
};

export default Zipcode8;
