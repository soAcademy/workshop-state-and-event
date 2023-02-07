import Zipcode from "./thailand-zipcode.json";

const uniqueProvices = [...new Set(Zipcode.map((r) => r.province))];

const ZipcodeProvider = ({uniqProvinces}) => {
  return (
    <>
      {" "}
      <div className="text-center">
      <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
      <div>
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      </div>
      <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
        <h2 className="text-xl mt-4 font-bold pl-4">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 m-4 ">
          {uniqProvinces.map((provinces) => {
            return <div>{provinces}</div>;
          })}
        </div>
      </div>
    </>
  );
};


const Zipcode1 = () => {
  return (
    <>
      <div className="w-full text-center"></div>
      <ZipcodeProvider uniqProvinces={uniqueProvices}/>
    
    </>
  );
};
export default Zipcode1;
