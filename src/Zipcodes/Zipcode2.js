import AllZipCode from "./thailand-zipcode.json";

const Zipcode2 = () => {
  // console.log(AllZipCode);
  const uniqueProvinces = [
    ...new Set(AllZipCode?.map((r) => r.province)),
  ].sort();
  // console.log(uniqueProvince);

  return (
    <div className="w-full h-full font-prompt text-sm p-6">
      <div className="header w-full h-14 flex items-center justify-center mb-4">
        <h1 className="text-2xl">ค้นหารหัสไปรษณีย์</h1>
      </div>
      <div className="inputBlock text-center mb-6">
        <input
          type="text"
          className="w-3/4 h-14 bg-gray-100 border-2 border-gray-300 rounded-full px-4"
          placeholder="ค้นหา ตำบล อำเภอ"
        />
      </div>
      <div className="header mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <h1 className="text-xl text-center">เลือกจังหวัด</h1>
        </div>
      </div>
      <div className="provinceBlock">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {uniqueProvinces.map((province, idx) => (
            <button key={idx} className="text-center">
              {province}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zipcode2;