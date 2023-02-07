import React from "react";

const Zipcode1 = () => {
  const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"];

  return (
    <div className="w-full text-center">
      <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
      <div>
        <input
          type="text"
          className="border border-gray-600 rounded-lg py-2 px-5 mt-4 w-1/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="w-2/3 mx-auto bg-sky-400-100 p-4 mt-8 rounded-lg text-left">
        <h2>เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-5">
          {provinces.map((province, idx) => (
            <div className="flex justify-center" key={idx}>
              {province}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zipcode1;
