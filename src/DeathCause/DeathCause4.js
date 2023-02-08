const DeathByCause = ({ currentYear, deathByCauses, totalDeath }) => (
  <div className="bg-gray-100 w-1/3 mr-2 p-2">
    <div className="text-center font-bold mb-2">
      สาเหตุการเสียชีวิตปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByCauses.map((r) => (
          <tr>
            <td>{r.cause}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathByProvince = ({ currentYear, deathByProvinces, totalDeath }) => (
  <div className="bg-gray-200 w-1/3 mx-2 p-2">
    <div className="text-center font-bold mb-2">
      จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces.map((r) => (
          <tr>
            <td>{r.province}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathChart = () => (
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
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
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปี {currentYear}</div>
      <div className="flex mt-4">
        <DeathByCause
          currentYear={currentYear}
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
        />
        <DeathByProvince
          currentYear={currentYear}
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause4;
