const DeathsByCause = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">สาเหตุการเสียชีวิต</h2>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>408,009</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>วัณโรคทุกชนิด</td>
            <td>189,009</td>
            <td>3.48%</td>
          </tr>
          <tr>
            <td>โรคเกี่ยวกับตับและตับอ่อน</td>
            <td>158,809</td>
            <td>2.17%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DeathsByProvince = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">จำนวนผู้เสียชีวิตแยกตามจังหวัด</h2>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>218,032 คน</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>กรุงเทพมหานคร</td>
            <td>52,302 คน</td>
            <td>3.89%</td>
          </tr>
          <tr>
            <td>เชียงใหม่</td>
            <td>48,512 คน</td>
            <td>3.57%</td>
          </tr>
        </tbody>
      </table>
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

const DeathCause2 = () => {
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

export default DeathCause2;
