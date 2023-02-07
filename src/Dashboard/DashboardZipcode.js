import mockZipcode from "./mockZipCode";
import { Link } from "react-router-dom";
const DashboardZipcode = () => {
  const uniqueProvince = [...new Set(mockZipcode.map((e) => e.province))];
  return (
    <div className="flex flex-col justify-center m-10 font-kanit">
      <p className="mx-auto p-10 text-2xl font-bold">ค้นหารหัสไปรษณีย์</p>
      <input
        placeholder="ค้นหา ตำบล อำเภอ"
        className="border-2 px-8 py-2 focus:border-blue-400 "
      ></input>
      <div className="mt-10">
        <p>เลือกจังหวัด</p>
        <div className="grid grid-cols-4">
          {uniqueProvince.map((province,idx) => (
            <Link id={idx} to={province} className="text-blue-400">
              {province}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardZipcode;
