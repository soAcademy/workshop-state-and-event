import ThailandZipcodeData from "./thailand-zipcode.json";


  const ZipcodeData = ({ provinces }) => (
  <>  
  <h1 className="text-2xl pt-3 font-bold underline">ค้นหารหัสไปรษณีย์</h1>
      <div>
      <input
          type="text"
          className="border-4 border-sky-400 rounded-lg p-4 mt-6 w-2/3"
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
  </>
  );

const ZipcodeProvince = ({ province, districts }) => (
  <>
  <h1 className="pt-4 text-2xl font-bold underline" >
    รหัสไปรษณีย์ในจังหวัด {province}
  </h1>
  
  <div className="p-4 mt-8 w-2/3 mx-auto bg-blue-100 rounded-lg text-left " >
  <table className="w-full" >
    <thead>
      <tr className="text-center font-bold border-collapse">
        <th className="p-2 border border-sky-400" >#</th>
        <th className="p-2 border border-sky-400" >อำเภอ/เขต</th>
        <th className="p-2 border border-sky-400" >รหัสไปรษณีย์</th>
      </tr>
    </thead>
    <tbody>
      {districts.map((r, idx) => (
      <tr key={idx} >
        <td className="p-2 border border-sky-400 text-center " >{idx + 1}</td>
        <td className="p-2 border border-sky-400 ">{r.district}</td>
        <td className="p-2 border border-sky-400 text-center " >{r.zipcode}</td>
      </tr>
      ))}
    </tbody>

  </table>
  </div>
  </>
)
    
  
  
      
    

const Zipcode1 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];        
  const province = "กรุงเทพมหานคร";
  const district = [
    ...new Map(ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
      r.district,r,
    ])
    ).values(),

  ]
  console.log(provinces, district);

  return (
    <div className="w-full text-center">
      {/* <ZipcodeData provinces={provinces} /> */}
      <ZipcodeProvince province={province} districts={district} />
    </div>


  );

};
export default Zipcode1;