import { useParams } from "react-router-dom";
import mockZipCode from "./mockZipCode.json";
const DistrictPages = () => {
  const { district, province } = useParams();
  const uniqueSubDistricts = [
    ...new Set(
      mockZipCode
        .filter((e) => e.district === district)
        .map((e) => e.subdistrict)
    ),
  ];
  const zipcode = mockZipCode.find((e) => e.district === district).zipcode;
  const copy = (id) => {
    const copyText = document.querySelector("#" + id);
    navigator.clipboard.writeText(copyText.innerHTML);
  };
  return (
    <div className="flex flex-col justify-center m-10 font-kanit space-y-4">
      <p className="mx-auto pt-10 text-7xl font-bold">{zipcode}</p>
      <button
        className="bg-blue-500 rounded-lg w-fit mx-auto p-2 px-4 text-white text-xl
        hover:bg-blue-600 active:bg-blue-700 "
        onClick={(e) => {
          navigator.clipboard.writeText(zipcode);
          e.target.innerHTML = "คัดลอกแล้ว";
          e.target.className =
            "bg-blue-300 rounded-lg w-fit mx-auto p-2 px-4 text-white text-xl pointer-events-none";
          setTimeout(() => {
            e.target.className =
              "bg-blue-500 rounded-lg w-fit mx-auto p-2 px-4 text-white text-xl hover:bg-blue-600 active:bg-blue-700 ";
            e.target.innerHTML = "คัดลอก";
          }, 2000);
        }}
      >
        คัดลอก
      </button>
      <p className="mx-auto text-slate-500 text-xl">
        รหัสไปรษณีย์ เขต {district} จังหวัด {province}
      </p>
      <table className="border-2 table-auto w-10/12 mx-auto border-collapse">
        <thead className="border-2">
          <tr>
            <th className="border-2">#</th>
            <th>ตำบล/แขวง</th>
            <th className="border-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {uniqueSubDistricts.map((subDistrict, idx) => {
            const data = mockZipCode.find(
              (item) => item.subdistrict === subDistrict
            );
            return (
              <tr key={idx} className="border-2">
                <td className="text-center border-2">{idx + 1}</td>
                <td className="px-4 text-blue-500 border-2">{subDistrict}</td>
                <td className="flex justify-center space-x-2">
                  <p id={"item" + String(idx)}>{data.zipcode}</p>{" "}
                  <p
                    className="px-2 text-blue-500 hover:text-blue-700 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                    onClick={(e) => {
                      copy("item" + String(idx));
                      e.target.className = "text-blue-500 pointer-events-none";
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DistrictPages;
