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
  // todo 3: Mock up Data ที่ต้องการเอาไปใส่ใน component แล้วส่ง props เพื่อเอาไปคำนวณ
  const currentYear = "2559";
  const totalDeath = 400800;
  const deathByCauses = [
    {
      cause: "วัณโรคทุกชนิด",
      death: 189000,
    },
    {
      cause: "เบาหวาน",
      death: 130000,
    },
  ];
  const deathByProvinces = [
    {
      province: "กรุงเทพมหานคร",
      death: 189000,
    },
    {
      province: "เชียงใหม่",
      death: 109000,
    },
  ];

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
