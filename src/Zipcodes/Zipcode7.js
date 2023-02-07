import AllZipCode from "./thailand-zipcode.json";
import { useState, useEffect } from "react";

const ZipcodeHome = ({ provinces, setProvince }) => {
  return (
    <div className="w-full md:w-3/4">
      <div className="header w-full h-14 flex items-center justify-center mb-4">
        <h1 className="text-2xl">ค้นหารหัสไปรษณีย์</h1>
      </div>
      <div className="inputBlock text-center mb-6">
        <input
          type="text"
          className="w-full md:w-3/4 h-14 bg-gray-100 border-2 border-gray-300 rounded-full px-4"
          placeholder="ค้นหา ตำบล อำเภอ"
        />
      </div>
      <div className="header mb-6">
        <div className="md:grid grid-cols-4 gap-4">
          <h1 className="text-xl text-left md:text-center">เลือกจังหวัด</h1>
        </div>
      </div>
      <div className="provinceBlock">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {provinces.map((province, idx) => (
            <button
              onClick={() => setProvince(province)}
              key={idx}
              className="text-center hover:text-blue-400 hover:underline "
            >
              {province}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ZipCodeDistrict = ({ province, districts }) => {
  return (
    <div className="w-full md:w-3/4">
      <div className="header mb-6">
        <div className="w-full h-14 mb-6 flex items-center justify-center">
          <h1 className="text-xl ">
            รหัสไปรษณีย์ในจังหวัด {province}
          </h1>
        </div>
        <div className="tableBlock w-full flex justify-center">
          <table className="border-collapse bg-gray-50 border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2 px-4">#</th>
                <th className="border border-slate-300 p-2 px-4">อำเภอ/เขต</th>
                <th className="border border-slate-300 p-2 px-4">
                  รหัสไปรษณีย์
                </th>
              </tr>
            </thead>
            <tbody>
              {districts.map((district, idx) => (
                <tr key={idx + 1}>
                  <td className="border border-slate-300 text-center p-2 px-4">
                    {idx + 1}
                  </td>
                  <td className="border border-slate-300 p-2 px-4">
                    {district.district}
                  </td>
                  <td className="border border-slate-300 text-center p-2 px-4">
                    {district.locationCode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Zipcode7 = () => {
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const newDistricts = [
      ...new Map(
        AllZipCode.filter((r) => r.province === province).map((r) => [
          r.district,
          r,
        ])
      ).values(),
    ];
    console.log(newDistricts);
    setDistricts(newDistricts);
  }, [province]);

  // console.log(AllZipCode);
  const uniqueProvinces = [
    ...new Set(AllZipCode?.map((r) => r.province)),
  ].sort();

  return (
    <div className="w-full h-full flex justify-center font-prompt text-sm p-6">
      {province === undefined && (
        <ZipcodeHome setProvince={setProvince} provinces={uniqueProvinces} />
      )}
      {province !== undefined && (
        <ZipCodeDistrict province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode7;
