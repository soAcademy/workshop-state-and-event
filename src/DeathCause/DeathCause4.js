import React from "react";

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

const DeathCause1 = () => {
  // todo 4 : ดึงดาต้าจาก JSON (บางส่วน) เพื่อมาลองคำนวณตัวเลข
  const deathCauseDatas = [
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2557,
      deathMale: 384,
      deathFemale: 284,
      deathRatePer100000MalePopulation: 123.2,
      deathRatePer100000FemalePopulation: 89.1,
    },
    {
      provinceKey: 21,
      provinceName: "ระยอง",
      pronvinceNameEng: "Rayong",
      regionKey: 5,
      region: "ภาคใต้",
      regionEng: "Southern",
      diseaseCauseDeathKey: 48,
      causeOfDeath: "ปอดอักเสบและโรคอื่นๆ ของปอด",
      year: 2556,
      deathMale: 134,
      deathFemale: 75,
      deathRatePer100000MalePopulation: 41.5,
      deathRatePer100000FemalePopulation: 22.6,
    },
    {
      provinceKey: 30,
      provinceName: "นครราชสีมา",
      pronvinceNameEng: "Nakhon Ratchasima",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2556,
      deathMale: 1523,
      deathFemale: 1023,
      deathRatePer100000MalePopulation: 1.59,
      deathRatePer100000FemalePopulation: 13.53,
    },
    {
      provinceKey: 30,
      provinceName: "นครราชสีมา",
      pronvinceNameEng: "Nakhon Ratchasima",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 115,
      causeOfDeath:
        "อุบัติเหตุ เหตุการณ์ที่ไม่สามารถระบุเจตนาและปัจจัยเสริมที่มีความสัมพันธ์กับสาเหตุการตาย",
      year: 2556,
      deathMale: 856,
      deathFemale: 213,
      deathRatePer100000MalePopulation: 8.76,
      deathRatePer100000FemalePopulation: 2.82,
    },
  ];

  // todo 3: Mock up Data ที่ต้องการเอาไปใส่ใน component แล้วส่ง props เพื่อเอาไปคำนวณ
  const currentYear = "2559";
  // todo 4.1 คำนวณ total death ใหม่
  // const totalDeath = 400800;
  const totalDeath = deathCauseDatas.reduce(
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
  // todo 4.2.2 หา deathByCauses
  const deathByCauses = deathCauseLists.map((cause) => {
    const totalDeath = deathCauseDatas
      .filter((r) => r.causeOfDeath === cause)
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
      cause,
      death: totalDeath.death,
      deathFemale: totalDeath.deathFemale,
      deathMale: totalDeath.deathMale,
    };
  });
  console.log(deathByCauses);

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
  const deathByProvinces = provinceLists.map((province) => {
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
  });
  console.log(deathByProvinces);

  // todo 2: วาง layout ในส่วน render แยกออกเป็น component
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปีพ.ศ. 2559</div>
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

export default DeathCause1;
