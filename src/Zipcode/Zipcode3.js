import React from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = (props) => {
  const [provincesUnique] = props;

  <>
    <div className="w-full text-center">
      <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
      <div>
        <input
          type="text"
          className="border border-gray-600 rounded-lg py-2 px-5 mt-4 w-1/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="w-2/3 mx-auto bg-sky-500 p-4 mt-8 rounded-lg text-left">
        <h2 className="text-white ml-3">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-5">
          {provincesUnique.map((province, idx) => (
            <div className="flex justify-center text-white" key={idx}>
              {province}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>;
};

const Zipcode3 = () => {
  // const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const provinces = ThailandZipcodeData.map((r) => r.province);
  const provincesUnique = [...new Set(provinces)];

  return (
    <>
      <ZipcodeHome provincesUnique={provincesUnique} />
    </>
  );
};

export default Zipcode3;
