import zipcodeList from "./thailand-zipcode.json";

const ZipcodeHome = ({ provinces }) => (
  <>
    <h1 className="font-2xl mb-2 text-center font-bold">ค้นหารหัสไปรษณีย์</h1>
    <input
      type="text"
      className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-nstl text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
    />
    <h2 className="font-xl mb-2 font-bold">เลือกจังหวัด</h2>
    <ul className="grid grid-cols-4 gap-2">
      {provinces.map((province, idx) => (
        <li key={idx} className="font-nstl">
          <button className="text-blue-600">{province}</button>
        </li>
      ))}
    </ul>
  </>
);

const ZipcodeProvince = ({ province, districtListForProvince }) => {
  // const ZipcodeListforProvince = (province) =>
  //   zipcodeList.filter((item) => item.province === province);
  return (
    <>
      <h1 className="font-2xl mb-2 text-center font-bold">
        รหัสไปรษณีย์ใน{province === "กรุงเทพมหานคร" ? "" : "จังหวัด"}
        {province}
      </h1>
      <table className="w-full text-left font-nstl text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>#</th>
            <th>{province === "กรุงเทพมหานคร" ? "เขต" : "อำเภอ"}</th>
            <th>รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {/* {zipcodeList
            .filter((item) => item.province === province) */}
          {districtListForProvince.map((item, idx) => (
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
              <td>{idx + 1}</td>
              <td>
                {item.district}
                {/* {item.district} {item.subdistrict} */}
              </td>
              <td>{item.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Zipcode5 = () => {
  const provinces = [...new Set(zipcodeList.map((item) => item.province))].sort(
    (a, b) => a.localeCompare(b, "th", { ignorePunctuation: true })
  );

  // console.log(zipcodeList.filter((item) => item.province === "กรุงเทพมหานคร"));

  const districtListForProvince = (province) => [
    ...new Map(
      zipcodeList
        .filter((item) => item.province === province)
        .map((item) => [item.district, item])
    ).values(),
  ];

  console.log(districtListForProvince("กรุงเทพมหานคร"));

  return (
    // <ZipcodeHome
    //   provinces={[...new Set(zipcodeList.map((item) => item.province))].sort(
    //     (a, b) => a.localeCompare(b, "th", { ignorePunctuation: true })
    //   )}
    // />
    <ZipcodeProvince
      province="กรุงเทพมหานคร"
      districtListForProvince={districtListForProvince("กรุงเทพมหานคร")}
    />
  );
};

export default Zipcode5;
