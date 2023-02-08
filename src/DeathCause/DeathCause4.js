import deaths from "./thailand-death-cause.json";

const DeathsByCauseTable = ({ totalDeath, deathsByCause }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl">สาเหตุการเสียชีวิต</h2>
      <table className="font-nstl">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString("TH")}</td>
            <td>100%</td>
          </tr>
          {deathsByCause.map((deathByCause, idx) => (
            <tr key={idx}>
              <td>{deathByCause.causeOfDeath.toLocaleString("TH")}</td>
              <td>{deathByCause.death.toLocaleString("TH")}</td>
              <td>
                {((deathByCause.death * 100) / totalDeath)
                  .toFixed(2)
                  .toLocaleString("TH")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathsByProvinceTable = ({ totalDeath, deathsByProvince }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl">จำนวนผู้เสียชีวิตแยกตามจังหวัด</h2>
      <table className="font-nstl">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString("TH")}</td>
            <td>100%</td>
          </tr>
          {deathsByProvince.map((deathByProvince, idx) => (
            <tr key={idx}>
              <td>{deathByProvince.provinceName.toLocaleString("TH")}</td>
              <td>{deathByProvince.death.toLocaleString("TH")}</td>
              <td>
                {((deathByProvince.death * 100) / totalDeath)
                  .toFixed(2)
                  .toLocaleString("TH")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const DeathCharts = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">แนวโน้มการเสียชีวิต</h2>
    </div>
  );
};

const DeathCause4 = () => {
  const currentYear = 2559;

  const totalDeath = 408009;

  const deathsByCause = [
    {
      causeOfDeath: "วัณโรคทุกชนิด",
      death: 189009,
    },
    { causeOfDeath: "โรคเกี่ยวกับตับและตับอ่อน", death: 158809 },
  ];

  const deathsByProvince = [
    {
      provinceName: "กรุงเทพมหานคร",
      death: 52302,
    },
    { provinceName: "เชียงใหม่", death: 48512 },
  ];

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div>ปี พ.ศ. {currentYear}</div>
      <div className="grid grid-cols-3 gap-4">
        <DeathsByCauseTable
          totalDeath={totalDeath}
          deathsByCause={deathsByCause}
        />
        <DeathsByProvinceTable
          totalDeath={totalDeath}
          deathsByProvince={deathsByProvince}
        />
        <DeathCharts />
      </div>
    </>
  );
};

export default DeathCause4;
