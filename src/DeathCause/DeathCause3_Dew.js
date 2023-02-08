const DeathByCause = ({totalDeath,deathByCauses}) => {
  return (
    <>
      <div className="bg-red-400 w-1/3 p-2">
        <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
        <table className="w-full">
          <tbody>
            <tr>
              <td>ทั้งหมด</td>
              <td>{totalDeath.toLocalString()}</td>
              <td>100%</td>
            </tr>
            {deathByCauses?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.cause}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const DeadByProvince = ({deathByProvinces,totalDeath}) => {
  return (
    <>
      <div className="bg-blue-400 w-1/3 p-2">
        <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
        <table className="w-full">
          <tbody>
            <tr>
              <td>ทั้งหมด</td>
              <td>{totalDeath.toLocalString()}</td>
              <td>100%</td>
            </tr>
            {deathByProvinces?.map(r=>{return})}
            <tr>
              <td>กรุงเทพมหานคร</td>
              <td>189,000 คน</td>
              <td>3.48%</td>
            </tr>
            {deathByProvinces?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.province}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const DeadChart = () => {
  return (
    <>
      <div className="bg-amber-400 w-1/3">แนวโน้มการเสียชีวิต</div>
    </>
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
    <>
      <div className="p-4">
        <h1 className="font-bold text-xl">
          จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554- 2559
        </h1>
        <div>ปี พ.ศ. 2559</div>
        <div className="flex space-x-4 mt-4">
          <DeathByCause deathByCauses={deathByCauses} totalDeath={totalDeath} />
          <DeadByProvince totalDeath={totalDeath} deathByProvinces={deathByProvinces}/>
          <DeadChart />
        </div>
      </div>
    </>
  );
};
export default DeathCause3;
