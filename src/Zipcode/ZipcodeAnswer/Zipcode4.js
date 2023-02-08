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

const ZipcodeProvince = () => (
  <>
    <h1 className="text-2xl pt-3 font-bold">
      รหัสไปรษณีย์ในจังหวัด กรุงเทพมหานคร
    </h1>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <table className="w-full">
        <thead>
          <tr className="text-center font-bold border-collapse">
            <th className="border border-slate-300 p-2">#</th>
            <th className="border border-slate-300 p-2">อำเภอ/เขต</th>
            <th className="border border-slate-300 p-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className="border border-slate-300 text-center p-2">1</td>
          <td className="border border-slate-300 p-2">เขตคลองสาน</td>
          <td className="border border-slate-300 text-center p-2">10600</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const Zipcode4 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  return (
    <div className="w-full text-center">
      {/* <ZipcodeHome provinces={provinces} /> */}
      <ZipcodeProvince />
    </div>
  );
};

export default Zipcode4;
