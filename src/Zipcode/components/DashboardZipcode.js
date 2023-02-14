import zipcodeData from "../assets/thailand-zipcode.json";
import { Link } from "react-router-dom";

export const DashboardZipcode = () => {
  const uniqueProvince = [...new Set(zipcodeData.map((e) => e.province))];
  return (
    <div className="flex flex-col justify-center m-10 font-kanit absolute top-1/4 w-full z-10">
      <div className="mt-10">
        <p>เลือกจังหวัด</p>
        <div className="grid grid-cols-4">
          {uniqueProvince.map((province, idx) => (
            <Link id={idx} to={province} className="text-blue-400 w-fit">
              {province}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

