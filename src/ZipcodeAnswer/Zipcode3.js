import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = ({ provinces }) => (
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
          <div>{province}</div>
        ))}
      </div>
    </div>
  </>
);

const Zipcode3 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];

  return (
    <div className="w-full text-center">
      <ZipcodeHome provinces={provinces} />
    </div>
  );
};

export default Zipcode3;
