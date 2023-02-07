import React from "react";

const Zipcode1 = () => {
  const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"];

  return (
    <div>
      <div className="w-full text-center mt-4">
        <p className="font-semibold text-xl">ค้นหารหัสไปรษณีย์</p>
      </div>
      <div className="flex justify-center mt-4">
        <input type="text" className="border-2 w-2/3" />
      </div>
      <div className="mt-10 pl-4">
        <p className="text-lg">เลือกจังหวัด :</p>
      </div>
      <div className="grid gap-4 grid-cols-4 pl-4 mt-4">
        {provinces.map((r) => (
          <div>{r}</div>
        ))}
      </div>
    </div>
  );
};

export default Zipcode1;
