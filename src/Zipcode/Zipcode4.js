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

const ZipCodeProvince = () => {
  return (
    <div>
      <div className="text-xl pt-5 text-center font-semibold">
        <p>รหัสไปรษณีย์ในจังหวัด กรุงเทพมหานคร</p>
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
            <tr>
              <td className="text-center p-1 border-2 border-gray-300">1</td>
              <td className="text-center p-1 border-2 border-gray-300">
                เขตคลองสาน
              </td>
              <td className="text-center p-1 border-2 border-gray-300">
                10600
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ZipCode4 = () => {
  const provinces = [...new Set(thailandZipCode.map((r) => r.province))];
  console.log(provinces);

  return (
    <div>
      <div className="w-full text-center">
        {/* <ZipCodeHome provinces={provinces} /> */}
      </div>
      <div>
        <ZipCodeProvince />
      </div>
    </div>
  );
};

export default ZipCode4;
