import React, { useState, useEffect } from "react";
import ThailandDeathCause from "../DeathCauseAnswer/thailand-death-cause.json";

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
              <td>{r.death.toLocaleString()}</td>
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
              <td>{r.death.toLocaleString()}</td>
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

const YearsFilter = (props) => {
  return (
    <div>
      <div className="mt-4 text-lg">
        เลือกปี พ.ศ.
        <select
          onChange={(e) => props.setCurrentYear(e.target.value)} // เพื่อให้สารมารถเปลี่ยนแปลงปีได้
          value={props.currentYear} // ข้อมูลปีที่ unique แล้ว
          className="border-2 border-gray-500 rounded ml-2"
        >
          {props.yearsUnique.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 text-lg">
        การเสียชีวิตของปี พ.ศ. {props.currentYear}
      </div>
    </div>
  );
};

const DeathCause6 = () => {
  // สร้าง useState มาเก็บค่าต่างๆ ที่มีการเปลี่ยนแปลง
  const [currentYear, setCurrentYear] = useState(2557);
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);

  const yearsUnique = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  ); // เริ่มจากการ map เข้าไปใน year ใน dataset แล้ว เรียงจากน้อย -> มาก
  console.log("yearsUnique", yearsUnique);

  useEffect(() => {
    // MockData เพื่อนำว่าใช้งาน หลังจากทำ mock ดีแล้วให้นำข้อมูลจริงมาแทนที่
    const deathCauseDataset = ThailandDeathCause.filter(
      (r) => r.year == currentYear // === ต้องตรง type ด้วย
    );
    // เริ่มหาจำนวนการเสียชีวิตทั้งหมดก่อน โดยการใช้ reduce ให้ acc เก็บค่าการเสียชีวิตของ ช/ญ
    const tmpTotalDeath = deathCauseDataset.reduce(
      (acc, r) => acc + r.deathFemale + r.deathMale,
      0
    );

    // ต่อมาทำการ unique ของการเสียชีวิตแต่ละอาการ โดยการ map ไปใน dataset เพื่อเอาข้อมูล causeOfDeath จากนั้นนำมา unique โดย newSet
    const deathCauseUnique = [
      ...new Set(deathCauseDataset.map((r) => r.causeOfDeath)),
    ];
    console.log("CauseUniq", deathCauseUnique);

    // ต่อมาหาจำนวนการเสียชีวิตของแต่ละอาการ เริ่มจาก Map เข้าไปให้ data ที่ทำการ unique แล้ว
    const tmpDeathByCauses = deathCauseUnique
      .map((cause) => {
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
              // ตั้งค่าให้ ตัวแปรที่จะรับค่า มีค่าเริ่มต้นที่ 0 ก่อน
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
      })
      .filter((r) => r.death > 0) // filter เอาข้อมูลเฉพาะที่มากกว่า 0
      .sort((a, b) => b.death - a.death); // เรียงข้อมูลจาก มาก -> น้อย
    console.log("DeathCause", deathByCauses);

    // ทำแบบเดียวกับการหาอาการเสียชีวิตแต่ละอาการ แต่เปลี่ยนเป็นแต่ละจังหวัด
    const provinceUnique = [
      ...new Set(deathCauseDataset.map((r) => r.provinceName)),
    ];
    console.log("ProvinceUniq", provinceUnique);

    const tmpDeathByProvinces = provinceUnique
      .map((province) => {
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
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    console.log("Provinces", deathByProvinces);

    setTotalDeath(tmpTotalDeath);
    setDeathByCauses(tmpDeathByCauses);
    setDeathByProvinces(tmpDeathByProvinces);
  }, [currentYear]); // กำหนดให้ฟังก์ชั่นต่างๆ ใน useEffect เปลี่ยนแปลงตาม currentYear

  return (
    <div className="p-4">
      <p className="text-xl font-semibold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </p>
      <div className="mt-4">
        <YearsFilter
          yearsUnique={yearsUnique}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
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

export default DeathCause6;
