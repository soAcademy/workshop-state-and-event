import React from 'react'

const DeathCause1 = () => {
  // todo 1 : สร้าง components ตามสิ่งที่เราต้องการโชว์
  // 1.1 components 1: เราจะใส่ "ตาราง" ที่แสดงจำนวนผู้เสียชีวิตแยกตามสาเหตุการเสียชีวิต
  const DeathByCause = () => (
    <div className="bg-blue-100 w-1/3">
      <div>สาเหตุการเสียชีวิต</div>
    </div>
  );
  // 1.2 components 2: เราจะใส่ "ตาราง" ที่แสดงจำนวนผู้เสียชีวิตแยกตามจังหวัด
  const DeathByProvince = () => (
    <div className="bg-amber-100 w-1/3">
      <div>จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    </div>
  );
  // 1.3 components 3: เราจะใส่ "กราฟ" ที่แสดงแนวโน้มการเสียชีวิต
  const DeathChart = () => (
    <div className="bg-green-100 w-1/3">
      <div>แนวโน้มการเสียชีวิต</div>
    </div>
  );
  // todo 2: วาง layout ในส่วน render แยกออกเป็น component
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
  )
}

export default DeathCause1