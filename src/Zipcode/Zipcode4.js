import React from "react";
// todo 2. import JSON files
import thailandZipCodeDatas from "./thailand-zipcode.json";

// todo 5 . re factor ส่วน render ของ Zipcode1 ให้กลายเป็น ZipcodeHome component ที่รับ props provinces แล้วเอาไปใช้ในส่วน render ของ Zipcode 3
const ZipcodeHome = ({ provinces }) => (
  <div className="w-full text-center">
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="Search here"
      />
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">Select Province</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div>{province}</div>
        ))}
      </div>
    </div>
  </div>
);

// todo 6. สร้าง component ใหม่ 1 อัน ชื่อว่า ZipcodeByProvince ให้เป็นหน้าที่แสดง รายการ Zipcode ของจังหวัดนั้นๆ เช่น กรุงเทพฯ มีเขตกี่เขต แล้วก็แสดงรหัสไปรณีย์แต่ละเขต
const ZipcodeByProvince = () => (
  <>
    <h1 className="text-2xl pt-3 font-bold text-center">
      รหัสไปรษณีย์ในจังหวัด กรุงเทพมหานคร
    </h1>
    <div className="text-center">
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
          <tr>
            <td className="border border-slate-300 text-center p-2">1</td>
            <td className="border border-slate-300 p-2">เขตคลองสาน</td>
            <td className="border border-slate-300 text-center p-2">10600</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);
const Zipcode4 = () => {
  // todo 1. สร้าง Mock up จังหวัด เพื่อ วางโครงหน้า
  // const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"]
  // todo 3. find all existing provinces in JSON file
  // const _provinces = thailandZipCodeDatas.map(
  //   (_province) => _province.province
  // );
  // output of todo 3. ข้อมูลที่ออกมาจะเป็นรายชื่อจังหวัดซ้ำๆเยอะๆ
  // todo 4. find unique province from _provinces
  // const provinces = [...new Set(_provinces)];
  // todo 4.1. สามารถ ReFactor ข้อ 3-4 ได้ดังนี้ ...
  const provinces = [
    ...new Set(thailandZipCodeDatas.map((_province) => _province.province)),
  ];

  return (
    <>
      <ZipcodeByProvince />
    </>
  );
};

export default Zipcode4;
