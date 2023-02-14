import { Link, useParams } from "react-router-dom";
import zipcodeData from "../assets/thailand-zipcode.json";

export const ProvincePages = () => {
  const copy = (id) => {
    const copyText = document.querySelector("#" + id);
    navigator.clipboard.writeText(copyText.innerHTML);
  };
  const { province } = useParams();
  const uniqueDistricts = [
    ...new Set(
      zipcodeData.filter((e) => e.province === province).map((e) => e.district)
    ),
  ];
  return (
    <div className="flex flex-col justify-center font-kanit">
      <p className="mx-auto text-2xl mt-20 font-semibold">
        รหัสไปรษณีย์ในจังหวัด {province}
      </p>
      <table className="border-2 table-fixed w-10/12 mx-auto border-collapse">
        <thead className="border-2">
          <tr>
            <th width="10%" className="border-2">
              #
            </th>
            <th>อำเภอ/เขต</th>
            <th className="border-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {uniqueDistricts.map((district, idx) => {
            const data = zipcodeData.find((item) => item.district === district);
            return (
              <tr key={idx} className="border-2">
                <td className="text-center border-2">{idx + 1}</td>
                <td className="px-4 text-blue-500 border-2">
                  <Link to={`/${province}/${district}`}>{district}</Link>
                </td>
                <td className="flex w-full">
                  <div className="flex justify-between w-[40%] mx-auto">
                    <p id={"item" + String(idx)}>{data.zipcode}</p>{" "}
                    <p
                      className="px-2 text-blue-500
                      hover:text-blue-700 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                      onClick={(e) => {
                        copy("item" + String(idx));
                        e.target.className =
                          " text-blue-500 pointer-events-none";
                        e.target.innerHTML = "คัดลอกแล้ว";
                        setTimeout(() => {
                          e.target.className =
                            "px-2 text-blue-500 hover:text-blue-700 hover:bg-gray-100 hover:rounded-lg cursor-pointer";
                          e.target.innerHTML = "คัดลอก";
                        }, 2000);
                      }}
                    >
                      คัดลอก
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

