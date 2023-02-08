const DeathByCause = () => (
  <div className="bg-blue-100 w-1/3 p-4">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
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

const DeathByProvince = () => (
  <div className="bg-amber-100 w-1/3 p-4">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>408,000 คน</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>กรุงเทพมหานคร</td>
          <td>189,000 คน</td>
          <td>3.48%</td>
        </tr>
        <tr>
          <td>เชียงใหม่</td>
          <td>109,000 คน</td>
          <td>1.48%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DeathChart = () => (
  <div className="bg-green-100 w-1/3 p-4">
    <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
  </div>
);

const DeathCause2 = () => {
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

export default DeathCause2;
