import AllZipCode from "./thailand-zipcode.json";

const ZipcodeHome = ({ provinces }) => {
  return (
      <div className="w-full md:w-3/4">
        <div className="header w-full h-14 flex items-center justify-center mb-4">
          <h1 className="text-2xl">ค้นหารหัสไปรษณีย์</h1>
        </div>
        <div className="inputBlock text-center mb-6">
          <input
            type="text"
            className="w-full md:w-3/4 h-14 bg-gray-100 border-2 border-gray-300 rounded-full px-4"
            placeholder="ค้นหา ตำบล อำเภอ"
          />
        </div>
        <div className="header mb-6">
          <div className="md:grid grid-cols-4 gap-4">
            <h1 className="text-xl text-left md:text-center">เลือกจังหวัด</h1>
          </div>
        </div>
        <div className="provinceBlock">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {provinces.map((province, idx) => (
              <button key={idx} className="text-center">
                {province}
              </button>
            ))}
          </div>
        </div>
      </div>
  );
};

const Zipcode3 = () => {
  // console.log(AllZipCode);
  const uniqueProvinces = [
    ...new Set(AllZipCode?.map((r) => r.province)),
  ].sort();
  // console.log(uniqueProvince);

  return (
    <div className="w-full h-full flex justify-center font-prompt text-sm p-6">
      <ZipcodeHome provinces={uniqueProvinces} />
    </div>
  );
};

export default Zipcode3;
