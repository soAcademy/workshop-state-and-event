import { useState } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = ({ provinces, setSelectedProvince }) => (
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
          <div onClick={() => setSelectedProvince(province)} className="cursor-pointer">{province}</div>
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

const Zipcode6 = () => {
  const [selectedProvince, setSelectedProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];

  // const districts = [
  //   ...new Map(
  //     ThailandZipcodeData.filter((r) => r.province === selectedProvince).map((r) => [
  //       r.district,
  //       r,
  //     ])
  //   ).values(),
  // ];

  // const checkProvince = (province) => {
  //   return setSelectedProvince(province);
  // };

  return (
    <div className="w-full text-center">
      {selectedProvince === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setSelectedProvince={setSelectedProvince}
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

export default Zipcode6;
