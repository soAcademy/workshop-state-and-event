import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipCodeHome = ({ provinceList }) => (
  <>
    <h1 className="text-black text-center text-4xl">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
      />
    </div>
    <div className="w-2/3 mx-auto bg-yellow-600 p-4 mt-8 rounded-lg text-left">
      <h2 className="texl-xl font-bold mt-4">เลือกจังหวัด</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinceList.map((p) => (
          <div>{p}</div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeDetail = () => (
  <>
    <h1 className="text-3xl font-bold">รหัสไปรษณีย์จังหวัด กรุงเทพมหานคร</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
      />
    </div>
    <div className="W-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
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
            <td className="border border-slate-300 p-2 text-center">1</td>
            <td className="border border-slate-300 p-2">เขตบางพลี</td>
            <td className="border border-slate-300 p-2 text-center">10540</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const Zipcode4 = () => {
  const provinceList = [...new Set(ThailandZipcodeData.map((p) => p.province))];

  return (
    <div className="w-full text-center">
      {/* <ZipCodeHome provinceList={provinceList} /> */}
      <ZipcodeDetail />
    </div>
  );
};

export default Zipcode4;
