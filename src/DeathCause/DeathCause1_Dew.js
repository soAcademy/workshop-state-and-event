const DeathByCause = () => {
  return (
    <>
      <div className="bg-red-400 w-1/3">สาเหตุการเสียชีวิต</div>
    </>
  );
};

const DeadByProvince = () => {
  return (
    <>
      <div className="bg-blue-400 w-1/3">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
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

const DeathCause1 = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-xl">
          จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554- 2559
        </h1>
        <div>ปี พ.ศ. 2559</div>
        <div className="flex space-x-4 mt-4">
          <DeathByCause />
          <DeadByProvince />
          <DeadChart />
        </div>
      </div>
    </>
  );
};
export default DeathCause1;
