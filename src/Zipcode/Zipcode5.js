import React from "react";
import thailandZipCode from "../ZipcodeAnswer/thailand-zipcode.json";

// const ZipCodeHome = ({ provinces }) => {
//   return (
//     <div>
//       <div className="w-full text-center mt-5">
//         <p className="font-semibold text-xl">ค้นหารหัสไปรษณีย์</p>
//       </div>
//       <div className="flex justify-center mt-5">
//         <input
//           type="text"
//           className="border-2 border-gray-400 w-2/3 rounded"
//           placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
//         />
//       </div>
//       <div className="mx-auto mt-14 py-2 px-4 w-4/5 bg-gradient-to-b from-red-100 to-blue-100 rounded text-left">
//         <p className="text-lg">เลือกจังหวัด :</p>
//         <div className="grid gap-4 grid-cols-4 pl-4 mt-4">
//           {provinces.map((r) => (
//             <div>{r}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const ZipCodeProvince = (props) => {
  return (
    <div>
      <div className="text-xl pt-5 text-center font-semibold">
        <p>รหัสไปรษณีย์ในจังหวัด {props.province}</p>
      </div>
      <div className="w-4/5 mx-auto p-4 mt-10 bg-gray-100 rounded">
        <table className="w-full">
          <thead>
            <tr className="text-center font-semibold">
              <th className="p-1 border-2 border-gray-300">#</th>
              <th className="p-1 border-2 border-gray-300">อำเภอ/เขต</th>
              <th className="p-1 border-2 border-gray-300">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tbody>
            {props.districts.map((r, idx) => {
              return (
                <tr key={idx}>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {idx + 1}
                  </td>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {r.district}
                  </td>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {r.zipcode}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ZipCode5 = () => {
  // const provinces = [...new Set(thailandZipCode.map((r) => r.province))];
  // console.log(provinces);
  const province = "เชียงใหม่";
  const filterDistricts = thailandZipCode.filter(
    (r) => r.province === province
  );
  console.log("filter", filterDistricts);
  // const mapDistrict = filterDistricts.map((r) => { //ไม่ต้อง map แยก
  //   return { p: r.province, d: r.district };
  // });
  // console.log("map", mapDistrict);
  const newMapDistrict = [
    ...new Map(filterDistricts.map((r) => [r.district, r])).values(),
  ]; // ยังทำไม่ได้---> ไม่ต้อง map แล้วมา map ในนี้ได้เลย
  console.log("newMap", newMapDistrict);

  // const districts = [ --> Answer Version
  //   ...new Map(
  //     thailandZipCode
  //       .filter((r) => r.province === province)
  //       .map((r) => [r.district, r])
  //   ).values(),
  // ];
  // console.log(districts);

  return (
    <div>
      <div className="w-full text-center">
        {/* <ZipCodeHome provinces={provinces} /> */}
      </div>
      <div>
        <ZipCodeProvince province={province} districts={newMapDistrict} />
      </div>
    </div>
  );
};

export default ZipCode5;
