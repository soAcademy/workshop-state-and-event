import { useState, useEffect } from "react";
// todo 2. import JSON files
import thailandZipCodeDatas from "./thailand-zipcode.json";

// todo 5 . re factor ส่วน render ของ Zipcode1 ให้กลายเป็น ZipcodeHome component ที่รับ props provinces แล้วเอาไปใช้ในส่วน render ของ Zipcode 3
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
          <div
            // todo 11. ใส่ event onClick ในดิฟ ที่แสดงชื่อจังหวัด "เมื่อคลิกแล้ว ให้ setProvince(จังหวัดที่เราคลิก)"
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
// todo 13. สร้าง component ใหม่อีกอัน ชื่อว่า ZipcodeNavBar ให้เป็นแถบเอาไว้กดกลับไปหน้า Home
const ZipcodeNavBar = ({ province, setProvince }) => (
  <div>
    <span
      className="text-blue-500 cursor-pointer"
      // todo 13.1 สร้าง event onClick "เมื่อถูกคลิก ให้ดำเนินการ setProvince(undefined) <== งง? ทำไมต้องเซตเป็น undefine ไปอ่าน todo 9."
      onClick={() => setProvince(undefined)}
    >
      หน้าแรก
    </span>
    {province !== undefined && (
      // todo 13.2 เพิ่ม logic "เมื่อ province ไม่เป็น undefine ให้แสดง tag นี้ด้วย"
      <span className="text-gray-500"> / {province}</span>
    )}
  </div>
);

// ==== MAIN COMPONENT BELOW ====
const Zipcode8 = () => {
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
  // todo 9. change parameters province & district (todo 7.1,7.2) to stand as useState
  const [province, setProvince] = useState(); //ทิ้งไว้เป็นค่าว่าง เพื่อให้ค่าเริ่มต้นเป็น undefine เพื่อเอาไปใช้เขียน logic ตอนเรียกหน้า ZipHome อ่านต่อใน (RENDER ZONE)
  const [districts, setDistricts] = useState([]); // ใส่เป็นอาเรย์ว่างเพื่อรอรับค่าจากการ map district
  // todo 10. ใส่ logic ในส่วน render ว่า "ถ้าจังหวัดเป็น undefine ให้แสดงหน้า ZipHome ถ้าไม่ใช่ ให้แสดงหน้า ZipcodeByProvince"
  // todo 12. สร้าง useEffects มาตรวจจับการเปลี่ยนแปลงของ province (การเปลี่ยนแปลงจะเกิดขึ้นตอนเรากดชื่อจังหวัด)

  useEffect(() => {
    // todo 12.1. สิ่งที่จะให้ useEffect ทำเมื่อเจอการเปลี่ยนแปลงของจังหวัด คือ การหารายการ zipcode ของจังหวัดนั้น (ที่คำนวณไว้ใน todo 7.2.2)
    // ยกก้อน 7.2.2 มาทั้งยวง
    const _dist = thailandZipCodeDatas
      .filter((r) => r.province === province)
      .map((r) => [r.district, r]);
    console.log("distx : ", _dist);
    // todo 12.2 เปลี่ยนตัวแปล districts ให้เป็น temp parameter โดยการใส่ underscore ไว้ข้างหน้า
    // เพราะว่าค่าที่ได้จากส่วนนี้ เราจะเอาไปยัดกลับใส่ useState districts ที่เราตั้งรอไว้ใน todo 9
    const _districts = [
      ...new Map(
        thailandZipCodeDatas
          .filter((r) => r.province === province)
          .map((r) => [r.district, r])
      ).values(),
    ];
    // todo 12.3 หลังจาก useEffects โดน trigger แล้ว และคำนวณค่า _districts เสร็จแล้ว ให้ดำเนินการเซ็ตค่ากลับไปที่ useState districts
    setDistricts(_districts);
  }, [province]);

  // ==== RENDERING BELOW ====
  return (
    <>
      <div className="w-full text-center">
        <div className="mt-4">
          <ZipcodeNavBar province={province} setProvince={setProvince} />
        </div>
        {/* ต่อ todo 9 : logic นี้บอกว่า ถ้า */}
        {province === undefined && (
          <ZipcodeHome provinces={provinces} setProvince={setProvince} />
        )}
        {province !== undefined && (
          <ZipcodeByProvince province={province} districts={districts} />
        )}
      </div>
    </>
  );
};

export default Zipcode8;
