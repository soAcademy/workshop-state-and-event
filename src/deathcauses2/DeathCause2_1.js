const CausesOfDeath = () => {
  return (
    <div className="bg-red-300 w-1/3">
      <div >Causes of Death</div>
    </div>
  );
};

const DeathByProvince = () => {
  return (
    <div className="bg-yellow-300 w-1/3">
      <div >Number of Deaths by Province</div>
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
const DeathCause2_1 = () => {
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

export default DeathCause2_1;
