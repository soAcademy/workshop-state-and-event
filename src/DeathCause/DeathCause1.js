import React from "react";

const DeathCause1 = () => {
  const DeathByCause = () => (
    <div className="bg-yellow-500">สาเหตุการเสียชีวิต</div>
  );

  const DeathByProvince = () => (
    <div className="bg-sky-500">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
  );

  const DeathChart = () => (
    <div className="bg-green-500">แนวโน้มการเสียชีวิต</div>
  );

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
