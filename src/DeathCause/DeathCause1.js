import React from "react";

const DeathByCause = () => {
  return (
    <div className="bg-cyan-100 w-1/3">
      <p>สาเหตุการเสียชีวิต</p>
    </div>
  );
};

const DeathByProvince = () => {
  return (
    <div className="bg-red-100 w-1/3">
      <div>จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-emerald-100">
      <div>แนวโน้มการเสียชีวิต</div>
    </div>
  );
};

const DeathCause1 = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold">จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</p>
      <div className="mt-4">
        <p>ปี พ.ศ. 2559</p>
      </div>
      <div className="flex mt-4 space-x-4 text-center">
        <DeathByCause />
        <DeathByProvince />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause1;
