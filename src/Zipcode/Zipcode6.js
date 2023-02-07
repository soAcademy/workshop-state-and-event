import { useState } from "react";
// todo 2. import JSON files
import thailandZipCodeDatas from "./thailand-zipcode.json";

// todo 5 . re factor ส่วน render ของ Zipcode1 ให้กลายเป็น ZipcodeHome component ที่รับ props provinces แล้วเอาไปใช้ในส่วน render ของ Zipcode 3
// todo 10. ใส่ event onClick ใส่ดิฟ ที่แสดงชื่อจังหวัด "เมื่อคลิกแล้ว ให้ setProvince(จังหวัดที่เราคลิก)"
const ZipcodeHome = ({ provinces, setProvince }) => (
  <div className="w-full text-center">
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="Search here"
      />
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">Select Province</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          // toto 10 here
          <div
            onClick={() => setProvince(province)}
            className="cursor-pointer text-blue-500"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// todo 6. สร้าง component ใหม่ 1 อัน ชื่อว่า ZipcodeByProvince ให้เป็นหน้าที่แสดง รายการ Zipcode ของจังหวัดนั้นๆ
// เช่น กรุงเทพฯ มีเขต 50 เขต แล้วก็แสดงรายการรหัสไปรณีย์แต่ละเขต
// todo 8. รับค่า props มาจาก main components
const ZipcodeByProvince = ({ province, districts }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold text-center">
      รหัสไปรษณีย์ในจังหวัด {province}
    </h1>
    <div className="text-center">
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
  </>
);

// ==== MAIN COMPONENT BELOW ====
const Zipcode5 = () => {
  // todo 1. สร้าง Mock up จังหวัด เพื่อ วางโครงหน้า
  // const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"]
  // todo 3. find all existing provinces in JSON file
  // const _provinces = thailandZipCodeDatas.map(
  //   (_province) => _province.province
  // );
  // output of todo 3. ข้อมูลที่ออกมาจะเป็นรายชื่อจังหวัดซ้ำๆเยอะๆ
  // todo 4. find unique province from _provinces
  // const provinces = [...new Set(_provinces)];
  // todo 4.1. สามารถ ReFactor ข้อ 3-4 ได้ดังนี้ ...
  const provinces = [
    ...new Set(thailandZipCodeDatas.map((_province) => _province.province)),
  ];
  // todo 7. create parameter to collect province name and district name
  // todo 7.1. create parameter province
  // const province = "กรุงเทพมหานคร";
  // todo 7.2. create parameter district
  // todo 7.2.1 คอนเซปคือให้ฟิลเตอร์จังหวัดใน thailandZipCodeDatas ที่มีชื่อตรงกันกับ จังหวัดที่อยู่ใน parameter ข้อ 7.1
  // todo 7.2.2 แล้วทำ [...new Map(...)] <== !!อันนี้ต้องไปอ่านเพิ่มนะ
  // const _dist = thailandZipCodeDatas
  //   .filter((r) => r.province === province)
  //   .map((r) => [r.district, r]);
  // console.log("distx : ", _dist);
  // const districts = [
  //   ...new Map(
  //     thailandZipCodeDatas
  //       .filter((r) => r.province === province)
  //       .map((r) => [r.district, r])
  //   ).values(),
  // ];
  // console.log("districts : ", districts);
  // todo 9. change parameters province & district (todo 7.1,7.2) to State
  const [province, setProvince] = useState(); //ทิ้งไว้เป็นค่าว่าง เพื่อให้ค่าเริ่มต้นเป็น undefine เพื่อเอาไปใช้เขียน logic ตอนเรียกหน้า ZipHome
  const [districts, setDistricts] = useState([]); // ใส่เป็นอาเรย์ว่างเพื่อรอรับค่าจากการ map district
  // todo 10. ใส่ logic ในส่วน render ว่า "ถ้าจังหวัดเป็น undefine ให้แสดงหน้า ZipHome ถ้าไม่ใช่ ให้แสดงหน้า ZipcodeByProvince"
  return (
    <>
      {province === undefined && (
        <ZipcodeHome provinces={provinces} setProvince={setProvince} />
      )}
      {province !== undefined && (
        <ZipcodeByProvince province={province} districts={districts} />
      )}
    </>
  );
};

export default Zipcode5;
