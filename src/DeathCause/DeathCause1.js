const DeathByCause = () => (
  <div className="bg-gray-100 w-1/3 mx-2">
    <div className="text-center font-bold">สาเหตุการเสียชีวิต</div>
  </div>
);
const DeathByProvince = () => (
  <div className="bg-gray-200 w-1/3 mx-2">
    <div className="text-center font-bold">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
  </div>
);
const DeathChart = () => (
  <div className="bg-gray-300 w-1/3 mx-2">
    <div className="text-center font-bold">แนวโน้มการเสียชีวิต</div>
  </div>
);

const DeathCause1 = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div className="mt-4">ปี 2555</div>
      <div className="flex mt-4">
        <DeathByCause />
        <DeathByProvince />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause1;
