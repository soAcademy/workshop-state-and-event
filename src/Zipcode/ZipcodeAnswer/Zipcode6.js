import { useState } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = ({ provinces, setProvince }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
      />
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div onClick={() => setProvince(province)} className="cursor-pointer text-blue-500">{province}</div>
        ))}
      </div>
    </div>
  </>
);

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

const Zipcode6 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  // const districts = ThailandZipcodeData.filter((r) => r.province === province);
  // const districts = [
  //   ...new Map(
  //     ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
  //       r.district,
  //       r,
  //     ])
  //   ).values(),
  // ];

  return (
    <div className="w-full text-center">
      {province === undefined && (
        <ZipcodeHome provinces={provinces} setProvince={setProvince} />
      )}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode6;
