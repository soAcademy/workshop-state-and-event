import React from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = (props) => {
  const { provincesUnique } = props;
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
              <div className="flex justify-center text-white" key={idx}>
                {province}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const ZipcodeProvince = () => (
  <>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl pt-3 font-bold">
        รหัสไปรษณีย์ในจังหวัด กรุงเทพมหานคร
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
          <tr>
            <td className="border border-slate-300 text-center p-2 text-white">
              1
            </td>
            <td className="border border-slate-300 p-2 text-white">
              เขตคลองสาน
            </td>
            <td className="border border-slate-300 text-center p-2 text-white">
              10600
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);
const Zipcode4 = () => {
  // const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const provinces = ThailandZipcodeData.map((r) => r.province);
  const provincesUnique = [...new Set(provinces)];

  return (
    <>
      {/* <ZipcodeHome provincesUnique={provincesUnique} /> */}
      <ZipcodeProvince />
    </>
  );
};

export default Zipcode4;
