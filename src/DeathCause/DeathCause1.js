const DeathByCause = () => (
  <div className="bg-gray-100 w-1/3 mr-2 p-2">
    <div className="text-center font-bold mb-2">สาเหตุการเสียชีวิต</div>
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
  <div className="bg-gray-200 w-1/3 mx-2 p-2">
    <div className="text-center font-bold mb-2">
      จำนวนผู้เสียชีวิตแยกตามจังหวัด
    </div>
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
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
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
