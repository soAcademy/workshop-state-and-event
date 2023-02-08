import { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";

// todo 1 : สร้าง components ตามสิ่งที่เราต้องการโชว์
// 1.1 components 1: เราจะใส่ "ตาราง" ที่แสดงจำนวนผู้เสียชีวิตแยกตามสาเหตุการเสียชีวิต
const DeathByCause = ({ totalDeath, deathByCauses }) => (
  <div className="bg-blue-100 w-1/3">
    <div>จำนวนผู้เสียชีวิตแยกตามสาเหตุการเสียชีวิต</div>
    {/* 1.1.1 mock up table use html tag */}
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByCauses?.map((cause, idx) => (
          <tr key={idx}>
            <td>{cause.cause}</td>
            <td>{cause.death.toLocaleString()}</td>
            <td>{((cause.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
// 1.2 components 2: เราจะใส่ "ตาราง" ที่แสดงจำนวนผู้เสียชีวิตแยกตามจังหวัด
const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
  <div className="bg-amber-100 w-1/3">
    <div>จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    {/* 1.2.1 mock up table use html tag */}
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces?.map((province, idx) => (
          <tr key={idx}>
            <td>{province.province}</td>
            <td>{province.death.toLocaleString()}</td>
            <td>{((province.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
// 1.3 components 3: เราจะใส่ "กราฟ" ที่แสดงแนวโน้มการเสียชีวิต
const DeathChart = () => (
  <div className="bg-green-100 w-1/3">
    <div>แนวโน้มการเสียชีวิต</div>
  </div>
);
// todo 5.4 : สร้าง components DeathFilter รับ props มาจาก ข้อ 5.3
const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => (
  <div>
    <div className="mt-4">
      เลือกปีพ.ศ.{" "}
      <select
        // 5.4.2 :  ดัก event onChange เมื่อมีการเปลี่ยนแปลงค่าใน select ให้เอาค่าใน select ไป setCurrentYear
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
      >
        {/* 5.4.1 : map yearLists ใส่ select option */}
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className="">การเสียชีวิตของปีพ.ศ. {currentYear}</div>
  </div>
);

const DeathCause6 = () => {
  // todo 3: Mock up Data ที่ต้องการเอาไปใส่ใน component แล้วส่ง props เพื่อเอาไปคำนวณ
  // todo 5.1 : ดึง unique years จัดเรียงปีให้เรียบร้อย เพราะจะเอาไปทำ option component แล้วเอาไป filter ดูข้อมูลแต่ละปี
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  console.log("yearLists : ", yearLists);

  // todo 5.2 : เปลี่ยน ตัวแปร currentYear ให้เป้น state เอาไว้เก็บค่าการเปลี่ยนแปลงจากการเลือก option year
  const [currentYear, setCurrentYear] = useState(2559);
  // todo 6.2 : เปลี่ยน ตัวแปร 4.1/4.2.2/4.3.2 ให้เป้น state (อันเดิมให้เติม _ ไว้ข้างหน้า) เอาไว้เก็บค่าที่ได้จากการทำงานของ Effects
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  // todo 6 : สร้าง useEffect ที่มาตรวจจับการเปลี่ยนแปลงของ current year
  useEffect(() => {
    // todo 6.3 : ยกก้อน calculate ทั้งก้อนมาใส่ไว้ในนี้
    // ========================================================= //
    // todo 4 : ดึงดาต้าจาก JSON (บางส่วน) เพื่อมาลองคำนวณตัวเลข
    // todo 5 : import file json แล้วเอามาวางแทน mock
    // todo 6.1 : เปลี่ยนตัวแปรในข้อ 5 ให้แยกออกตามปี from state currentYear
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    //// [
    ////   {
    ////     provinceKey: 19,
    ////     provinceName: "สระบุรี",
    ////     pronvinceNameEng: "Saraburi",
    ////     regionKey: 3,
    ////     region: "ภาคเหนือ",
    ////     regionEng: "Northern",
    ////     diseaseCauseDeathKey: 53,
    ////     causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
    ////     year: 2557,
    ////     deathMale: 384,
    ////     deathFemale: 284,
    ////     deathRatePer100000MalePopulation: 123.2,
    ////     deathRatePer100000FemalePopulation: 89.1,
    ////   },
    //// ];

    // todo 4.1 คำนวณ total death ใหม่
    // const totalDeath = 400800;
    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    // todo 4.2 คำนวณ death by cause ใหม่
    //const deathByCauses = [
    //  {
    //    cause: "วัณโรคทุกชนิด",
    //    death: 189000,
    //  },
    //];
    // todo 4.2.1 หา unique Causes
    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
    ];
    // todo 4.2.2 หา deathByCauses (แบบไม่เชน)
    const _deathByCauses = deathCauseLists
      .map((cause) => {
        // 4.2.2.1 - filter เอา array of death cause ที่ชื่อตรงกัน มาอยู่รวมกันก่อน
        const filteredCauses = deathCauseDatas.filter(
          (r) => r.causeOfDeath === cause
        );
        console.log("filteredCause : ", filteredCauses);
        // 4.2.2.2 - เสร็จแล้ว เอา filtered array มา รีดิวส์ เพื่อ sum รวม จำนวนคนตาย
        const totalDeath = filteredCauses.reduce(
          (acc, r) => ({
            death: acc.death + r.deathFemale + r.deathMale,
            deathFemale: acc.deathFemale + r.deathFemale,
            deathMale: acc.deathMale + r.deathMale,
          }),
          {
            death: 0,
            deathFemale: 0,
            deathMale: 0,
          }
        );
        // 4.2.2.3
        return {
          cause,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      }) // todo 4.2.3 กรองเอาโรคที่ไม่มีผู้ตายออก แล้วก็เรียงจากมากไปน้อย
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    console.log(_deathByCauses);

    // todo 4.3 คำนวณ death by Province ใหม่
    // const deathByProvinces = [
    //   {
    //     province: "กรุงเทพมหานคร",
    //     death: 189000,
    //   },
    // ];
    // todo 4.3.1 หา unique Provinces
    const provinceLists = [
      ...new Set(deathCauseDatas.map((r) => r.provinceName)),
    ];
    // todo 4.3.2 หา deathByProvince
    const _deathByProvinces = provinceLists
      .map((province) => {
        const totalDeath = deathCauseDatas
          .filter((r) => r.provinceName === province)
          .reduce(
            (acc, r) => ({
              death: acc.death + r.deathFemale + r.deathMale,
              deathFemale: acc.deathFemale + r.deathFemale,
              deathMale: acc.deathMale + r.deathMale,
            }),
            {
              death: 0,
              deathFemale: 0,
              deathMale: 0,
            }
          );
        return {
          province,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      }) // todo 4.3.3 กรองเอาจังหวัดที่ไม่มีผู้ตายออก แล้วก็เรียงจากมากไปน้อย
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    console.log(deathByProvinces);
    setTotalDeath(_totalDeath);
    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);
  }, [currentYear]);

  // todo 2: วาง layout ในส่วน render แยกออกเป็น component
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      {/* 5.3 แทนที่ div พศ ด้วย component DeathFilter */}
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      {/* <div className="mt-4">ปีพ.ศ. 2559</div> */}
      <div className="flex space-x-4 mt-4">
        <DeathByCause totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause6;
