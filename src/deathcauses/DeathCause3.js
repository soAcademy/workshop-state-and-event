const DeathCauseByDisease = (props) => {
  const { deathByCauses, totalDeath } = props;

  return (
    <div className="bg-sky-500 w-1/3 p-4">
      <div className="font-bold">Causes of Death in 2015</div>
      <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>total</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r) => (
            <tr>
              <td>{r.cause}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathCauseByProvince = (props) => {
  const { deathByProvinces, totalDeath } = props;

  return (
  <div className="bg-teal-300 w-1/3 p-4">
    <div className="font-bold">Number of Death By Province in 2015</div>
    <div className="font-bold mb-2">สาเหตุการเสียชีวิตตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>กทม</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces?.map((r) => (
            <tr>
              <td>{r.province}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
}

const DeathChart = () => (
  <div className="bg-red-300 w-1/3 p-4">
    <div>Likelihood of Death</div>
  </div>
);

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
      <h1> จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</h1>
      <h2>ปีพ.ศ. {currentYear}</h2>
      <div className="flex space-x-4">
        <DeathCauseByDisease deathByCauses={deathByCauses} totalDeath={totalDeath} />
        <DeathCauseByProvince deathByProvinces={deathByProvinces} totalDeath={totalDeath}/>
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause3;
