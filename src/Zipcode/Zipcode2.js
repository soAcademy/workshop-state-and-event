import ThailandZipcodeData from "./thailand-zipcode.json";


  const Zipcode1 = () => {
    const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
    //.map เพื่อเปลี่ยนเป็นค่าใหม่”
   
  
  return (
    <div className="w-full text-center">
      <h1 className="text-2xl pt-3 font-bold underline">ค้นหารหัสไปรษณีย์</h1>
      <div>
      <input
          type="text"
          className="border-4 border-gray-400 rounded-lg p-4 mt-6 w-2/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="w-3/3 mx-auto bg-blue-100 p-2 mt-6 rounded-lg text-left">
        <h2 className="text-xl mt-2 font-bold">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
            <div>{province}</div>
          ))}
        </div>
      </div>
    </div>
  );

};
export default Zipcode1;