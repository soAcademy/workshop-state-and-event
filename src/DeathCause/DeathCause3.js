import React from "react";

const DeathByCause = (props) => {
  return (
    <div className="bg-cyan-100 w-1/3 p-4">
      <div className="font-semibold mb-2">
        <p>สาเหตุการเสียชีวิต</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{props.totalDeath}</td>
            <td>100%</td>
          </tr>
          {props.deathByCauses?.map((r, idx) => (
            <tr key={idx}>
              <td>{r.cause}</td>
              <td>{r.death}</td>
              <td>{((r.death / props.totalDeath) * 100).toFixed(2)}%</td>
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
      <div className="font-semibold mb-2">
        <p>จำนวนผู้เสียชีวิตแยกตามจังหวัด</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{props.totalDeath}</td>
            <td>100%</td>
          </tr>
          {props.deathByProvinces?.map((r, idx) => (
            <tr key={idx}>
              <td>{r.province}</td>
              <td>{r.death}</td>
              <td>{((r.death / props.totalDeath) * 100).toFixed(2)}%</td>
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
      <div className="font-semibold mb-2">
        <p>แนวโน้มการเสียชีวิต</p>
      </div>
    </div>
  );
};

const DeathCause3 = () => {
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
      <p className="text-xl font-semibold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </p>
      <div className="mt-4">
        <p>ปี พ.ศ. {currentYear}</p>
      </div>
      <div className="flex mt-4 space-x-4 text-center">
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
