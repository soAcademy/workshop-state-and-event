import { useParams } from "react-router-dom";
import mockZipCode from "./mockZipCode.json";
const ProvincePages = () => {
  const copy = (id) => {
    const copyText = document.querySelector("#" + id);
    navigator.clipboard.writeText(copyText.innerHTML);
  };
  const { province } = useParams();
  const uniqueDistricts = [
    ...new Set(
      mockZipCode.filter((e) => e.province === province).map((e) => e.district)
    ),
  ];
  return (
    <div className="flex flex-col justify-center font-kanit">
      <p className="mx-auto text-xl mt-20">รหัสไปรษณีย์ในจังหวัด {province}</p>
      <table className="border-2 table-auto w-10/12 mx-auto border-collapse">
        <thead className="border-2">
          <tr>
            <th className="border-2">#</th>
            <th>อำเภอ/เขต</th>
            <th className="border-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {uniqueDistricts.map((i, idx) => {
            const data = mockZipCode.find((item) => item.district === i);
            return (
              <tr className="border-2">
                <td className="text-center border-2">{idx + 1}</td>
                <td className="px-4 text-blue-500 border-2">{data.district}</td>
                <td className="flex justify-center space-x-2">
                  <p id={"item" + String(idx)}>{data.zipcode}</p>{" "}
                  <p
                    onClick={(e) => {
                      copy("item" + String(idx));
                      e.target.innerHTML = "คัดลอกแล้ว";
                      setTimeout(()=>e.target.innerHTML = "คัดลอก", 2000)
                      // console.log("e :>> ", e);
                    }}
                    className="text-blue-500"
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

export default ProvincePages;
