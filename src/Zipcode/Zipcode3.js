import React from "react";
import thailandZipCode from "../ZipcodeAnswer/thailand-zipcode.json";

const ZipCodeHome = ({ provinces }) => {
  return (
    <div>
      <div className="w-full text-center mt-5">
        <p className="font-semibold text-xl">ค้นหารหัสไปรษณีย์</p>
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          className="border-2 border-gray-400 w-2/3 rounded"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="mx-auto mt-14 py-2 px-4 w-4/5 bg-gradient-to-b from-red-100 to-blue-100 rounded text-left">
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

const ZipCode3 = () => {
  const provinces = [...new Set(thailandZipCode.map((r) => r.province))];
  console.log(provinces);

  return (
    <div>
      <div className="w-full text-center">
        <ZipCodeHome provinces={provinces} />
      </div>
    </div>
  );
};

export default ZipCode3;
