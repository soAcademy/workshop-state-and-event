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
const Zipcode3 = () => {
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
  const provinces = [...new Set(thailandZipCodeDatas.map((_province) => _province.province))]

  return (
    <>
      <ZipcodeHome provinces={provinces} />
    </>
  );
};

export default Zipcode3;
