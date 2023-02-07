import data from "./thailand-zipcode.json";
import React, { useState, useEffect } from "react";

const ZipcodeHome = ({
  provinces,
  setProvince,
  setSearch,
  searchData,
  search,
}) => {
  console.log("provinces", provinces);
  return (
    <>
      <h1 className="font-bold text-xl">ค้นหารหัสไปรษณีย์</h1>

      <input
        type="text"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        className="border border-gray-400 rounded mt-4 p-2 w-1/2"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search !== undefined && search.length >= 3 && (
        <div className="w-1/2 mx-auto relative">
          <div className="h-72 absolute border border-gray-200 bg-white w-full text-left p-2 rounded overflow-auto shadow">
            <div className="font-bold">
              {" "}
              ผลลัพธ์การค้นหา {searchData.length} รายการ
            </div>
            {searchData.map((r) => (
              <div
                className="hover:bg-gray-200 cursor-pointer"
                onClick={() => navigator.clipboard.writeText(r.zipcode)}
              >
                {r.subdistrict} / {r.district} / {r.province} / {r.zipcode}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-3/4 mx-auto p-4 mt-4 rounded text-center">
        <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
        <div className="grid grid-cols-4 mt-4">
          {provinces.map((r, idx) => (
            <div
              onClick={() => setProvince(r)}
              className="cursor-pointer hover:text-blue-500"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ZipcodeProvinces = ({ province, districts }) => {
  return (
    <>
      <h1 className="font-bold text-xl">รหัสไปรษณีย์ในจังหวัด {province}</h1>
      <div className="w-3/4 mx-auto p-4 mt-4 rounded">
        <table className="w-full">
          <thead>
            <tr className="text-center font-bold">
              <th className="border border-blue-300 p-2">#</th>
              <th className="border border-blue-300 p-2">อำเภอ/เขต</th>
              <th className="border border-blue-300 p-2">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((r, idx) => (
              <tr className="text-center font-bold">
                <td className="border border-blue-300 p-2">{idx + 1}</td>
                <td className="border border-blue-300 p-2">{r.district}</td>
                <td
                  className="border border-blue-300 p-2 cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(r.zipcode)}
                >
                  {r.zipcode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const ZipcodeNavbar = ({ province, setProvince }) => {
  return (
    <>
      <div className="flex justify-between mx-6">
        <div
          className="cursor-pointer hover:text-blue-500 hover:underline"
          onClick={() => setProvince(undefined)}
        >
          กลับไปหน้าแรก
        </div>

        <div>จังหวัด : {province}</div>
      </div>
    </>
  );
};

const Zipcode8 = () => {
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();

  const provinces = [...new Set(data.map((r) => r.province))];

  // console.log("data", data);
  // const districts0 = data.filter((r) => r.province === province);
  // console.log("districts0", districts0);
  // const districts1 = districts0.map((r) => [r.district, r]);
  // console.log("districts1", districts1);
  // const districts2 = [...new Map(districts1)];
  // console.log("districts2", districts2);

  useEffect(() => {
    const tempDistricts = [
      ...new Map(
        data.filter((r) => r.province === province).map((r) => [r.district, r])
      ).values(),
    ];
    setDistricts(tempDistricts);

    console.log("tempDistricts", tempDistricts);
  }, [province]);

  useEffect(() => {
    const tempSearchData = data.filter(
      (r) =>
        r.province.includes(search) ||
        r.district.includes(search) ||
        r.subdistrict.includes(search) ||
        String(r.zipcode).includes(search)
    );
    setSearchData(tempSearchData);

    console.log("tempSearchData", tempSearchData);
  }, [search]);

  return (
    <div className="text-center mt-4 w-full">
      {province !== undefined && (
        <ZipcodeNavbar province={province} setProvince={setProvince} />
      )}

      {province === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setProvince={setProvince}
          setSearch={setSearch}
          searchData={searchData}
          search={search}
        />
      )}
      {province !== undefined && (
        <ZipcodeProvinces province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode8;
