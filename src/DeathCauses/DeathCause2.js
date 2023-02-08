import ThailandDeathCause from "./thailand-death-cause.json";
// หลังจากที่เรา Mock ตัวโครงสร้างเสร็จแล้วเราก็เริ่ม Mock ข้อมูลต่อเลย

const DeathByCause = () => (
  <div className="bg-blue-100 w-1/3">
    <div>สาเหตุการเสียชีวิต</div>
{/* เพิ่ม Data ที่เราจะ Mock เข้าไปในตรงนี้ เริ่มแบบ Hard code ไปก่อน */}
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
<div className="bg-amber-100 w-1/3">
  <div>จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
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
  <div className="bg-green-100 w-1/3">
    <div>แนวโน้มการเสียชีวิต</div>
{/* เพิ่ม Data ที่เราจะ Mock เข้าไปในตรงนี้ เริ่มแบบ Hard code ไปก่อน */}
    <table className="w-full">
    <tbody>
    </tbody>
  </table>
  </div>
);

const DeathCause1 = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-xl">
          จำนวนผู้เสียชีวิต สาเหตุ และอัตราการเสียชีวิต ระหว่างปี 2554 - 2559
        </h1>
        <div className="mt-4"> ปี พ.ศ. 2559</div>
        <div className="flex space-x-4 mt-4">
          <DeathByCause/>
          <DeathByProvince/>
          <DeathChart/>
        </div>
      </div>
    </>
  );
};
export default DeathCause1;
