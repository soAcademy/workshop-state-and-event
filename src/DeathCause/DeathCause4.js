import React from "react";

const DeathByCause = (props) => {
  const { deathByCauses, totalDeath } = props;
  return (
    <div className="bg-yellow-400 w-1/3 p-4">
      <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r, idx) => (
            <tr key={idx}>
              <td>{r.cause}</td>
              <td>{r.death}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = (props) => {
  const { totalDeath, deathByProvinces } = props;
  return (
    <div className="bg-sky-400 w-1/3 p-4">
      <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces.map((r, idx) => (
            <tr key={idx}>
              <td>{r.province}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathChart = () => (
  <div className="bg-green-400 w-1/3 p-4">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
  </div>
);
const DeathCause4 = () => {
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

export default DeathCause4;
