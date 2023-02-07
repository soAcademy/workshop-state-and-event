import AllZipCode from "./thailand-zipcode.json";

const Zipcode1 = () => {
  // console.log(AllZipCode);
  const uniqueProvince = [
    ...new Set(AllZipCode?.map((r) => r.province)),
  ].sort();
  // console.log(uniqueProvince);

  return (
    <div className="w-full h-full font-prompt text-sm p-8">
      <div className="header w-full mb-8">
        <h1 className="text-center text-2xl">ค้นหารหัสไปรษณีย์</h1>
      </div>
      <div className="inputBlock text-center mb-16">
        <input
          type="text"
          className="w-3/4 h-14 bg-gray-100 border-2 border-gray-300 rounded-full px-4"
          placeholder="ค้นหา ตำบล อำเภอ"
        />
      </div>
      <div className="header mb-8">
        <h1 className="text-xl">เลือกจังหวัด</h1>
      </div>
      <div className="provinceBlock">
        <div className="grid grid-cols-4 gap-4">
          {uniqueProvince.map((province, idx) => (
            <button key={idx} className="text-center">
              {province}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zipcode1;
