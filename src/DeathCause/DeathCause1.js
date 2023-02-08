const DeathByCause = () => (
  <div className="bg-blue-100 w-1/3">
    <div>สาเหตุการเสียชีวิต</div>
  </div>
);
const DeathByProvince = () => (
  <div className="bg-amber-100 w-1/3">
    <div>จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
  </div>
);
const DeathChart = () => (
  <div className="bg-green-100 w-1/3">
    <div>แนวโน้มการเสียชีวิต</div>
  </div>
);

const DeathCause1 = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปีพ.ศ. 2559</div>
      <div className="flex space-x-4 mt-4">
        <DeathByCause />
        <DeathByProvince />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause1;
