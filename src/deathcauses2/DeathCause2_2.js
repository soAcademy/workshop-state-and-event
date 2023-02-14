const CausesOfDeath = () => {
  return (
    <div className="bg-red-300 w-1/3">
      <div className="font-bold m-4 ">Causes of Death</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td >ทั้งหมด</td>
            <td>408,000</td>
            <td>100%</td>
          </tr>
          <tr>
            <td >วัณโรคทุกชนิด</td>
            <td>189,000</td>
            <td>3.48%</td>
          </tr>
          <tr>
            <td >เบาหวาน</td>
            <td>130,000</td>
            <td>2.48%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = () => {
  return (
    <div className="bg-yellow-300 w-1/3">
      <div className="font-bold m-4 ">Number of Deaths by Province</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td >ทั้งหมด</td>
            <td>408,000</td>
            <td>100%</td>
          </tr>
          <tr>
            <td >กรุงเทพมหานคร</td>
            <td>189,000</td>
            <td>3.48%</td>
          </tr>
          <tr>
            <td >เชียงใหม่</td>
            <td>130,000</td>
            <td>2.48%</td>
          </tr>
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
const DeathCause2_2 = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        Total Number of Deaths and Causes of Death from 2554 - 2559
      </h1>
      <h2 className="mt-4 ">ปี พ.ศ 2559</h2>
      <div className="flex space-x-4 mt-4 ">
        <CausesOfDeath />
        <DeathByProvince />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause2_2;
