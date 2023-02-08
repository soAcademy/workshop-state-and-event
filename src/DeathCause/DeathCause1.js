const DeathsByCause = () => {
  return (
    <div>
      <h2 className="font-xl mb-2">สาเหตุการเสียชีวิต</h2>
    </div>
  );
};

const DeathsByProvince = () => {
  return (
    <div>
      <h2 className="font-xl mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</h2>
    </div>
  );
};
const DeathCharts = () => {
  return (
    <div>
      <h2 className="font-xl mb-2">แนวโน้มการเสียชีวิต</h2>
    </div>
  );
};

const DeathCause1 = () => {
  return (
    <>
      <h1 className="font-2xl mb-2 font-bold">
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
