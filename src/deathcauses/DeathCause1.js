const DeathCauseByDisease = () => (
  <div className="bg-sky-500 w-1/3 p-4">
    <div className="font-bold">Causes of Death in 2015</div>
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>267,115</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DeathCauseByProvince = () => (
  <div className="bg-teal-300 w-1/3 p-4">
    <div className="font-bold">Number of Death By Province in 2015</div>
    <div className="font-bold mb-2">สาเหตุการเสียชีวิตตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>กทม</td>
          <td>267,115</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DeathChart = () => (
  <div className="bg-red-300 w-1/3 p-4">
    <div>Likelihood of Death</div>
  </div>
);

const DeathCause1 = () => {
  return (
    <div className="p-4">
      <h1> จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</h1>
      <h2>ปีพ.ศ. 2559</h2>
      <div className="flex space-x-4">
        <DeathCauseByDisease />
        <DeathCauseByProvince />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause1;
