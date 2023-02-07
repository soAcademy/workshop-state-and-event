import React from "react";
import thailandZipcode from "../ZipcodeAnswer/thailand-zipcode.json";

const Zipcode2 = () => {
  const provinces = [...new Set(thailandZipcode.map((r) => r.province))];
  console.log(provinces);

  return (
    <div>
      <div className="w-full text-center mt-5">
        <p className="font-semibold text-xl">ค้นหารหัสไปรษณีย์</p>
      </div>
      <div className="flex justify-center mt-5">
        <input type="text" className="border-2 w-2/3 rounded" />
      </div>
      <div className="mx-auto mt-14 py-2 px-4 w-4/5 bg-gradient-to-b from-red-100 to-blue-100 rounded">
        <p className="text-lg">เลือกจังหวัด :</p>
        <div className="grid gap-4 grid-cols-4 pl-4 mt-4">
          {provinces.map((r) => (
            <div>{r}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zipcode2;
