import React from "react";

const DeathByCause = (props) => {
  return (
    <div className="bg-cyan-100 w-1/3 p-4">
      <div className="font-semibold mb-2 text-center">
        <p>สาเหตุการเสียชีวิต</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{props.totalDeath}</td>
            <td className="text-right">100%</td>
          </tr>
          {props.deathByCauses?.map((r, idx) => (
            <tr key={idx}>
              <td>{r.cause}</td>
              <td>{r.death}</td>
              <td className="text-right">
                {((r.death / props.totalDeath) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = (props) => {
  return (
    <div className="bg-red-100 w-1/3 p-4">
      <div className="font-semibold mb-2 text-center">
        <p>จำนวนผู้เสียชีวิตแยกตามจังหวัด</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{props.totalDeath}</td>
            <td className="text-right">100%</td>
          </tr>
          {props.deathByProvinces?.map((r, idx) => (
            <tr key={idx}>
              <td>{r.province}</td>
              <td>{r.death}</td>
              <td className="text-right">
                {((r.death / props.totalDeath) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-emerald-100 w-1/3 p-4">
      <div className="font-semibold mb-2 text-center">
        <p>แนวโน้มการเสียชีวิต</p>
      </div>
    </div>
  );
};

const DeathCause3 = () => {
  const currentYear = "2559";

  // MockData เพื่อนำว่าใช้งาน
  const deathCauseDataset = [
    {
      provinceKey: 30,
      provinceName: "นครราชสีมา",
      pronvinceNameEng: "Nakhon Ratchasima",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 3,
      causeOfDeath: "ความดันเลือดสูง และโรคหลอดเลือดในสมอง",
      year: 2556,
      deathMale: 611,
      deathFemale: 574,
      deathRatePer100000MalePopulation: 6.25,
      deathRatePer100000FemalePopulation: 7.59,
    },
    {
      provinceKey: 30,
      provinceName: "นครราชสีมา",
      pronvinceNameEng: "Nakhon Ratchasima",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 16,
      causeOfDeath: "โรคหัวใจ",
      year: 2556,
      deathMale: 490,
      deathFemale: 396,
      deathRatePer100000MalePopulation: 5.02,
      deathRatePer100000FemalePopulation: 5.24,
    },
    {
      provinceKey: 17,
      provinceName: "สิงห์บุรี",
      pronvinceNameEng: "Sing Buri",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 3,
      causeOfDeath: "ความดันเลือดสูง และโรคหลอดเลือดในสมอง",
      year: 2558,
      deathMale: 95,
      deathFemale: 68,
      deathRatePer100000MalePopulation: 38.9,
      deathRatePer100000FemalePopulation: 27.85,
    },
    {
      provinceKey: 17,
      provinceName: "สิงห์บุรี",
      pronvinceNameEng: "Sing Buri",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 16,
      causeOfDeath: "โรคหัวใจ",
      year: 2558,
      deathMale: 65,
      deathFemale: 45,
      deathRatePer100000MalePopulation: 26.62,
      deathRatePer100000FemalePopulation: 18.43,
    },
    {
      provinceKey: 49,
      provinceName: "มุกดาหาร",
      pronvinceNameEng: "Mukdahan",
      regionKey: 2,
      region: "ภาคกลาง",
      regionEng: "Central",
      diseaseCauseDeathKey: 5,
      causeOfDeath: "ไตอักเสบ กลุ่มอาการของไตพิการ และไตพิการ",
      year: 2557,
      deathMale: 85,
      deathFemale: 61,
      deathRatePer100000MalePopulation: 49.01,
      deathRatePer100000FemalePopulation: 35.35,
    },
  ];

  // เริ่มหาจำนวนการเสียชีวิตทั้งหมดก่อน โดยการใช้ reduce ให้ acc เก็บค่าการเสียชีวิตของ ช/ญ
  const totalDeath = deathCauseDataset.reduce(
    (acc, r) => acc + r.deathFemale + r.deathMale,
    0
  );

  // ต่อมาทำการ unique ของการเสียชีวิตแต่ละอาการ โดยการ map ไปใน dataset เพื่อเอาข้อมูล causeOfDeath จากนั้นนำมา unique โดย newSet
  const deathCauseUnique = [
    ...new Set(deathCauseDataset.map((r) => r.causeOfDeath)),
  ];
  console.log("CauseUniq", deathCauseUnique);

  // ต่อมาหาจำนวนการเสียชีวิตของแต่ละอาการ เริ่มจาก Map เข้าไปให้ data ที่ทำการ unique แล้ว
  const deathByCauses = deathCauseUnique.map((cause) => {
    // สร้างตัวแปรมาเก็บค่าคือ totalDeath โดยเริ่มต้นจาก filter ข้อมูล อาการเสียชีวิตทั้งหมด
    const totalDeath = deathCauseDataset
      .filter((i) => i.causeOfDeath === cause)
      // ต่อด้วยนำข้อมูลทั้งหมดมา + กันเพื่อเก็บค่าการเสียชีวิต ทั้งหมด และ แยก ช/ญ
      .reduce(
        (acc, j) => ({
          death: acc.death + j.deathFemale + j.deathMale,
          deathFemale: acc.deathFemale + j.deathFemale,
          deathMale: acc.deathMale + j.deathMale,
        }),
        {
          death: 0,
          deathFemale: 0,
          deathMale: 0,
        }
      );
    // เมื่อได้ข้อมูลมาแล้วให้ return ตามชื่อ ตัวแปร ที่ต้องการส่งไปใช้งาน เช่น death คือข้อมูลการเสียชีวิตทั้งหมดรวมกัน
    return {
      cause,
      death: totalDeath.death,
      deathFemale: totalDeath.deathFemale,
      deathMale: totalDeath.deathMale,
    };
  });
  console.log("DeathCause", deathByCauses);

  // ทำแบบเดียวกับการหาอาการเสียชีวิตแต่ละอาการ แต่เปลี่ยนเป็นแต่ละจังหวัด
  const provinceUnique = [
    ...new Set(deathCauseDataset.map((r) => r.provinceName)),
  ];
  console.log("ProvinceUniq", provinceUnique);

  const deathByProvinces = provinceUnique.map((province) => {
    const totalDeath = deathCauseDataset
      .filter((i) => i.provinceName === province)
      .reduce(
        (acc, j) => ({
          death: acc.death + j.deathFemale + j.deathMale,
          deathFemale: acc.deathFemale + j.deathFemale,
          deathMale: acc.deathMale + j.deathMale,
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
  console.log("Provinces", deathByProvinces);

  return (
    <div className="p-4">
      <p className="text-xl font-semibold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </p>
      <div className="mt-4">
        <p>ปี พ.ศ. {currentYear}</p>
      </div>
      <div className="flex mt-4 space-x-4">
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

export default DeathCause3;
