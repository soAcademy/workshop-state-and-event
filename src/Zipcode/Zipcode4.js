import Zipcode from "./thailand-zipcode.json";

const uniqueProvices = [...new Set(Zipcode.map((r) => r.province))];

const ZipcodeProvider = ({ province,districts }) => {
  return (
    <>
      {" "}
      {console.log(">>>>>>",districts)}
      <div className="text-center">
        <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์{province}</h1>
        <div>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
            placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          />
        </div>
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
          {districts.map((r, idx) => (
            <tr key={idx}>
              <td className="border border-slate-300 text-center p-2">
                {idx + 1}
              </td>
              <td className="border border-slate-300 p-2">{r.district}</td>
              <td className="border border-slate-300 text-center p-2">
                {r.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

const ZipcodeTable = () => {
  return (
    <>
      <h1 className="text-center text-xl pt-3 font-bold">
        รหัสไปรษณีย์ในจังหวัด กรุงเทพมหานคร
      </h1>
      <div className=" mx-auto text-center">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        />
      </div>
      <div className="w-2/3 mx-auto bg-gray-400 rounded-lg text-left mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-center font-bold border-collapse">
              <th className="border border-slate-300 p-2">#</th>
              <th className="border border-slate-300 p-2">อำเภอ/เขต</th>
              <th className="border border-slate-300 p-2">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tr>
            <td className="border border-slate-300 p-2 text-center ">1</td>
            <td className="border border-slate-300 p-2 text-center">
              เขตคลองสาน
            </td>
            <td className="border border-slate-300 p-2 text-center">10600</td>
          </tr>
        </table>
      </div>
    </>
  );
};
const province = "กรุงเทพมหานคร";
const uniqDistrict = Zipcode.filter((r) => r.province === province).map((r) => {
  return [r.district, r];
});

// const tester = Zipcode.filter((r) => r.province === province).map((r) => {return r.district})

const districts = [...new Map(uniqDistrict).values()];

const Zipcode4 = () => {
  return (
    <>
      <div className="w-full text-center"></div>
      {console.log("Data for new Map", uniqDistrict)}
      {console.log("Districts", districts)}
      {/* <Zipc eProvider uniqProvinces={uniqueProvices}/> */}
      <ZipcodeProvider province= {province} districts={districts}/>
    </>
  );
};
export default Zipcode4;
