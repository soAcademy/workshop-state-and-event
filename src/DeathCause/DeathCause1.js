const DeathsByCause = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">สาเหตุการเสียชีวิต</h2>
    </div>
  );
};

const DeathsByProvince = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">จำนวนผู้เสียชีวิตแยกตามจังหวัด</h2>
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

const DeathCause1 = () => {
  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <DeathsByCause />
        <DeathsByProvince />
        <DeathCharts />
      </div>
    </>
  );
};

export default DeathCause1;
