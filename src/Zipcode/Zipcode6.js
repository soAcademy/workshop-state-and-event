import data from "./thailand-zipcode.json";
import React, { useState } from "react";

const ZipcodeHome = ({ provinces, setProvince }) => {
  console.log("provinces", provinces);
  return (
    <>
      <h1 className="font-bold text-xl">ค้นหารหัสไปรษณีย์</h1>

      <input
        type="text"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        className="border border-gray-400 rounded mt-4 p-2 w-1/2"
      />

      <div className="w-3/4 mx-auto bg-gray-100 p-4 mt-4 rounded text-left">
        <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-4">
          {provinces.map((r, idx) => (
            <div
              onClick={() => setProvince(r)}
              className="cursor-pointer hover:text-blue-500"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ZipcodeProvinces = ({ province, districts }) => {
  return (
    <>
      <h1 className="font-bold text-xl">รหัสไปรษณีย์ในจังหวัด {province}</h1>
      <div className="w-3/4 mx-auto bg-gray-100 p-4 mt-4 rounded">
        <table className="w-full">
          <thead>
            <tr className="text-center font-bold">
              <th className="border border-blue-300 p-2">#</th>
              <th className="border border-blue-300 p-2">อำเภอ/เขต</th>
              <th className="border border-blue-300 p-2">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((r, idx) => (
              <tr className="text-center font-bold">
                <td className="border border-blue-300 p-2">{idx + 1}</td>
                <td className="border border-blue-300 p-2">{r.district}</td>
                <td className="border border-blue-300 p-2">{r.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const Zipcode6 = () => {
  const [province, setProvince] = useState();
  const [districts, setdistricts] = useState([]);
  const provinces = [...new Set(data.map((r) => r.province))];

  // console.log("data", data);
  // const districts0 = data.filter((r) => r.province === province);
  // console.log("districts0", districts0);
  // const districts1 = districts0.map((r) => [r.district, r]);
  // console.log("districts1", districts1);
  // const districts2 = [...new Map(districts1)];
  // console.log("districts2", districts2);

  // const districts = [
  //   ...new Map(
  //     data.filter((r) => r.province === province).map((r) => [r.district, r])
  //   ).values(),
  // ];

  // console.log("districts", districts);

  return (
    <div className="text-center mt-4 w-full">
      {province === undefined && (
        <ZipcodeHome provinces={provinces} setProvince={setProvince} />
      )}
      {province !== undefined && (
        <ZipcodeProvinces province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode6;
