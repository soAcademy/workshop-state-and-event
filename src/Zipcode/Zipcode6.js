import React, { useState } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = (props) => {
  const { provincesUnique, setProvince } = props;
  console.log(provincesUnique);
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
        <div>
          <input
            type="text"
            className="border border-gray-600 rounded-lg py-2 px-5 mt-4 w-1/3"
            placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          />
        </div>
        <div className="w-2/3 mx-auto bg-sky-500 p-4 mt-8 rounded-lg text-left">
          <h2 className="text-white ml-3">เลือกจังหวัด</h2>
          <div className="grid grid-cols-4 mt-5">
            {provincesUnique.map((province, idx) => (
              <div
                onClick={() => setProvince(province)}
                className="flex justify-center text-white cursor-pointer hover:bg-white hover:text-black hover:p-1 hover:rounded-[10px]"
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
  const { districts, province } = props;
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-2xl pt-3 font-bold">
            รหัสไปรษณีย์ในจังหวัด {province}
          </h1>
          <div>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg p-2 mt-4"
              placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
            />
          </div>
        </div>
        <div className="w-2/3 mx-auto bg-sky-600 p-4 mt-8 rounded-lg text-left">
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
const Zipcode6 = () => {
  // const provincess = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const provinces = ThailandZipcodeData.map((r) => r.province);
  const provincesUnique = [...new Set(provinces)];
  // const province = "กรุงเทพมหานคร";
  // -------------------------------
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  // const district = [
  //   ...new Map(
  //     ThailandZipcodeData.filter(
  //       (item) => item.province === "กรุงเทพมหานคร"
  //     ).map((r) => [r.district, r])
  //   ).values(),
  // ];
  // console.log("District", district);

  // set Set()
  // [...new Set([1,1,2,2,3,3])]
  // output = [1,2,3]

  // set Map()
  // [...new Map(["key1","value1"],["key2","value2"]).values()]
  // output = [[key,value]]

  return (
    <>
      {province === undefined && (
        <ZipcodeHome
          provincesUnique={provincesUnique}
          setProvince={setProvince}
        />
      )}
      {province !== undefined && (
        <ZipcodeProvince districts={districts} province={province} />
      )}
    </>
  );
};

export default Zipcode6;
