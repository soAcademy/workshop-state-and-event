const CausesOfDeath = (props) => {
  const { totalDeath, deathByCauses } = props;
  return (
    <div className="bg-red-300 w-1/3">
      <div className="font-bold m-4 ">Causes of Death</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r, idx) => (
            <tr key={idx}>
              <td>{r.cause}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death/totalDeath)*100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = (props) => {
  const { deathByProvinces, totalDeath } = props;
  return (
    <div className="bg-yellow-300 w-1/3">
      <div className="font-bold m-4 ">Number of Deaths by Province</div>
      <table className="w-full m-4">
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
              <td>{((r.death/totalDeath)*100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-green-300 w-1/3">
      <div>Records of Death</div>
    </div>
  );
};
const DeathCause2_3 = () => {
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
        Total Number of Deaths and Causes of Death from 2554 - 2559
      </h1>
      <h2 className="mt-4 ">ปี พ.ศ {currentYear}</h2>
      <div className="flex space-x-4 mt-4 ">
        <CausesOfDeath totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince deathByProvinces={deathByProvinces} totalDeath={totalDeath} />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause2_3;
