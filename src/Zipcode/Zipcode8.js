import { useEffect, useState } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";


  const ZipcodeData = ({ provinces, setProvince, search, setSearch, searchDatas, setSearchDatas,}) => (
  <>  
  <h1 className="text-2xl pt-3 font-bold underline">
    ค้นหารหัสไปรษณีย์</h1>
      <div>
      <input
          type="text"
          className="border-4 border-sky-400 rounded-lg p-4 mt-6 w-2/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {search !== undefined && search.length >= 3 && (
      <div className="w-2/3 mx-auto mt-4 relative ">
        <div className="w-full h-64 overflow-auto bg-white shadow text-left rounded-lg absolute top-0">
          <div className="font-bold px-4 pt-4">
            ผลลัพธ์การค้นหา {searchDatas.length} รายการ
          </div>
          <div className="text-sm text-gray-600">
            {searchDatas?.map((r, idx) => (
              <div
                key={idx}
                className="py-1 hover:cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                onClick={() => navigator.clipboard.writeText(r.zipcode)}
              >
                <span className="px-4">
                  ต.{r.subdistrict} อ.{r.district} จ.{r.province} {r.zipcode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
      <div className="w-3/3 mx-auto bg-blue-100 p-2 mt-6 rounded-lg text-left">
        <h2 className="text-xl mt-2 font-bold">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
            <div onClick={() => setProvince(province)} 
            className="cursor-pointer text-sky-500" >
              {province}</div>
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

const ZipcodeNavBar = ({ province, setProvince }) => (
  <div>
    <span className=" text-blue-500 cursor-pointer" 
    onClick={() => setProvince(undefined)}
    >
      หน้าแรก
    </span>
    {province !== undefined && (
      <span className="  text-red-500" > - {province}</span>
    )}
  </div>
);
  
  
      
    

const Zipcode1 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];        
  const [province, setProvince] = useState();
  const [district, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchDatas, setSearchDatas] = useState([]);

  useEffect(() => {
    const _districts = [
      ...new Map(ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
            r.district,r,
          ])
          ).values(),
    ];
    setDistricts(_districts);
  }, [province]);

  useEffect(() => {
    const _searchDatas = ThailandZipcodeData.filter(
      (r) => 
      r.province.includes(search) ||
      r.district.includes(search) ||
      r.subdistrict.includes(search) ||
      String(r.zipcode).includes(search)
    );
    setSearchDatas(_searchDatas);
  }, [search]);
  //   ...new Map(ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
  //     r.district,r,
  //   ])
  //   ).values(),

  // ]
  console.log(provinces, district);

  return (
    <div className="w-full text-center">
      <div className="mt-4">
      <ZipcodeNavBar province={province} setProvince={setProvince} />
      </div>
      {province === undefined && (
        <ZipcodeData provinces={provinces} setProvince={setProvince} 
          search={search}
          setSearch={setSearch}
          searchDatas={searchDatas}
          setSearchDatas={setSearchDatas} 
          />
      )}
      {/* <ZipcodeData provinces={provinces} /> */}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts={district} />
      )}  
      
    </div>


  );

};
export default Zipcode1;