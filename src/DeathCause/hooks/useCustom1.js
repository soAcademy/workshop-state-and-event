import { useEffect, useState } from "react";

export const useCustom1 = ({ ThailandDeathCause }) => {
  const yearsUnique = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  ); // เริ่มจากการ map เข้าไปใน year ใน dataset แล้ว เรียงจากน้อย -> มาก
  // console.log("yearsUnique", yearsUnique);

  // สร้าง useState มาเก็บค่าต่างๆ ที่มีการเปลี่ยนแปลง
  const [currentYear, setCurrentYear] = useState(2558);
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [chartOption1, setChartOption1] = useState({});
  const [chartOption2, setChartOption2] = useState({});
  const [selectedCauses, setSelectedCauses] = useState();

  useEffect(() => {
    // MockData เพื่อนำว่าใช้งาน หลังจากทำ mock ดีแล้วให้นำข้อมูลจริงมาแทนที่
    // เมื่ออยู่ใน useEffect แล้ว การ filter ปีตาม currentYear เพื่อให้ข้อมูลเปลี่ยนตามปีที่ต้องการ
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
    // console.log("CauseUniq", deathCauseUnique);

    // ต่อมาหาจำนวนการเสียชีวิตของแต่ละอาการ เริ่มจาก Map เข้าไปให้ data ที่ทำการ unique แล้ว
    const tmpDeathByCauses = deathCauseUnique
      .map((cause) => {
        // สร้างตัวแปรมาเก็บค่าคือ totalDeath โดยเริ่มต้นจาก filter ข้อมูล อาการเสียชีวิตทั้งหมด
        const totalDeathByCause = deathCauseDataset
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
          death: totalDeathByCause.death,
          deathFemale: totalDeathByCause.deathFemale,
          deathMale: totalDeathByCause.deathMale,
        };
      })
      .filter((r) => r.death > 0) // filter เอาข้อมูลเฉพาะที่มากกว่า 0
      .sort((a, b) => b.death - a.death); // เรียงข้อมูลจาก มาก -> น้อย
    // console.log("DeathCause", tmpDeathByCauses);

    // ทำแบบเดียวกับการหาอาการเสียชีวิตแต่ละอาการ แต่เปลี่ยนเป็นแต่ละจังหวัด
    const provinceUnique = [
      ...new Set(deathCauseDataset.map((r) => r.provinceName)),
    ];
    // console.log("ProvinceUniq", provinceUnique);

    const tmpDeathByProvinces = provinceUnique
      .map((province) => {
        const totalDeathByProvinces = deathCauseDataset
          .filter(
            (i) =>
              i.provinceName === province &&
              (selectedCauses === undefined ||
                selectedCauses === i.causeOfDeath)
          )
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
          death: totalDeathByProvinces.death,
          deathFemale: totalDeathByProvinces.deathFemale,
          deathMale: totalDeathByProvinces.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log("Provinces", tmpDeathByProvinces);

    const tmpDeathByYears = yearsUnique
      .map((year) => {
        // ต้องใช้ dataset ข้างนอกที่ไม่ใช่ dataset ที่ filter year แล้ว ไม่งั้น ข้อมูลจะออกมาปีเดียว
        const totalDeathByYears = ThailandDeathCause.filter(
          (r) => r.year == year
        ).reduce(
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
          year,
          death: totalDeathByYears.death,
          deathFemale: totalDeathByYears.deathFemale,
          deathMale: totalDeathByYears.deathMale,
        };
      })
      .sort((a, b) => a.year - b.year);
    console.log("Years", tmpDeathByYears);

    const tmpChartOption1 = {
      xAxis: {
        type: "category",
        data: tmpDeathByYears.map((r) => r.year),
        name: "year",
      },
      yAxis: {
        type: "value",
        name: "totalDeath",
        max: "dataMax",
        min: "dataMin",
      },
      series: [
        {
          data: tmpDeathByYears.map((r) => r.death),
          type: "line",
          smooth: true,
          lineStyle: { color: "#aeaaa9", width: 3, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    const tmpDeathByGender = deathCauseDataset.reduce(
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
    console.log("Gender", tmpDeathByGender);

    const tmpChartOption2 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          data: [
            { value: tmpDeathByGender.deathMale, name: "ชาย" },
            { value: tmpDeathByGender.deathFemale, name: "หญิง" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    setTotalDeath(tmpTotalDeath);
    setDeathByCauses(tmpDeathByCauses);
    setDeathByProvinces(tmpDeathByProvinces);
    setChartOption1(tmpChartOption1);
    setChartOption2(tmpChartOption2);
  }, [currentYear, selectedCauses]); // กำหนดให้ฟังก์ชั่นต่างๆ ใน useEffect เปลี่ยนแปลงตาม currentYear
  return {
    yearsUnique,
    currentYear,
    setCurrentYear,
    totalDeath,
    deathByCauses,
    setSelectedCauses,
    totalDeath,
    deathByProvinces,
    chartOption1,
    chartOption2,
  };
};
