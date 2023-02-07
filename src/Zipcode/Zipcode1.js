const Zipcode1 = () => {
  const provinces = ["กรุงเทพมหานคร", "นนทบุรี", "สุโขทัย", "แพร่"];
  return (
    <>
      <div className="text-center mt-4 w-full">
        <h1 className="font-bold text-xl">ค้นหารหัสไปรษณีย์</h1>

        <input
          type="text"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          className="border border-gray-400 rounded mt-4 p-2 w-1/2"
        />

        <div className="w-3/4 mx-auto bg-gray-100 p-4 mt-4 rounded text-left">
          <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
          <div className="grid grid-cols-4 mt-4">
            {provinces.map((r) => (
              <div>{r}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Zipcode1;
