import React from "react";

const DeathByCause = () => {
  return (
    <div className="bg-cyan-100 w-1/3 p-4">
      <div className="font-semibold mb-2">
        <p>สาเหตุการเสียชีวิต</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>408,000</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>วัณโรคทุกชนิด</td>
            <td>189,000</td>
            <td>3.48%</td>
          </tr>
          <tr>
            <td>เบาหวาน</td>
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
    <div className="bg-red-100 w-1/3 p-4">
      <div className="font-semibold mb-2">
        <p>จำนวนผู้เสียชีวิตแยกตามจังหวัด</p>
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>408,000</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>กรุงเทพมหานคร</td>
            <td>189,000 คน</td>
            <td>3.48%</td>
          </tr>
          <tr>
            <td>เชียงใหม่</td>
            <td>109,000</td>
            <td>1.48%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-emerald-100 w-1/3 p-4">
      <div className="font-semibold mb-2">
        <p>แนวโน้มการเสียชีวิต</p>
      </div>
    </div>
  );
};

const DeathCause2 = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </p>
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

export default DeathCause2;
