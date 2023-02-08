import React, { useState, useEffect } from "react";
import thailandZipCode from "../ZipcodeAnswer/thailand-zipcode.json";

const ZipCodeHome = (props) => {
  return (
    <div>
      <div className="w-full text-center mt-5">
        <p className="font-semibold text-xl">ค้นหารหัสไปรษณีย์</p>
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          className="border-2 border-gray-400 w-2/3 rounded"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
          onChange={(e) => props.setSearchbar(e.target.value)}
        />
      </div>
      {props.searchbar !== undefined && props.searchbar.length >= 3 && (
        <div className="w-2/3 mx-auto relative">
          <div className="w-full h-64 overflow-auto bg-slate-50 shadow-md rounded absolute">
            <div className="font-semibold px-4 py-4 text-left">
              ผลการค้นหา {props.searchZipCode.length} รายการ
            </div>
            <div className="">
              {props.searchZipCode?.map((r, idx) => (
                <div
                  key={idx}
                  className="py-1 pl-6 text-left hover:bg-slate-200"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `ต.${r.subdistrict} อ.${r.district} จ.${r.province} ${r.zipcode}`
                    )
                  }
                >
                  <span className="cursor-pointer hover:underline hover:text-cyan-500">
                    ต.{r.subdistrict} อ.{r.district} จ.{r.province} {r.zipcode}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto mt-14 py-2 px-4 w-4/5 bg-gradient-to-b from-red-100 to-blue-100 rounded text-left">
        <p className="text-lg">เลือกจังหวัด :</p>
        <div className="grid gap-4 grid-cols-4 pl-4 mt-4">
          {props.provinces?.map((r) => (
            <div
              onClick={() => props.setProvince(r)}
              className="cursor-pointer hover:underline hover:text-cyan-500"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ZipCodeProvince = (props) => {
  return (
    <div>
      <div className="text-xl pt-5 text-center font-semibold">
        <p>รหัสไปรษณีย์ในจังหวัด {props.province}</p>
      </div>
      <div className="w-4/5 mx-auto p-4 mt-10 bg-gray-100 rounded">
        <table className="w-full">
          <thead>
            <tr className="text-center font-semibold">
              <th className="p-1 border-2 border-gray-300">#</th>
              <th className="p-1 border-2 border-gray-300">อำเภอ/เขต</th>
              <th className="p-1 border-2 border-gray-300">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tbody>
            {props.districts?.map((r, idx) => {
              return (
                <tr key={idx}>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {idx + 1}
                  </td>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {r.district}
                  </td>
                  <td className="text-center p-1 border-2 border-gray-300">
                    {r.zipcode}{" "}
                    <span
                      onClick={() => navigator.clipboard.writeText(r.zipcode)}
                      className="pl-4 cursor-pointer text-cyan-700 hover:underline hover:text-cyan-500"
                    >
                      คัดลอง
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ZipCodeNavBar = (props) => {
  return (
    <div className="">
      <span
        onClick={() => props.setProvince(undefined)}
        className="cursor-pointer hover:underline hover:text-cyan-500"
      >
        หน้าแรก
      </span>
      {props.province !== undefined && (
        <span className=""> / {props.province}</span>
      )}
    </div>
  );
};

const ZipCode8 = () => {
  const provinces = [...new Set(thailandZipCode.map((r) => r.province))];
  // console.log(provinces);

  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [searchbar, setSearchbar] = useState();
  const [searchZipCode, setSearchZipCode] = useState([]);

  useEffect(() => {
    const filterDistricts = thailandZipCode.filter(
      (r) => r.province === province
    );
    console.log("filter", filterDistricts);

    const tmpDistricts = [
      ...new Map(filterDistricts?.map((r) => [r.district, r])).values(),
    ]; // ยังทำไม่ได้---> ไม่ต้อง map แล้วมา map ในนี้ได้เลย
    console.log("newMap", tmpDistricts);
    setDistricts(tmpDistricts);
  }, [province]);

  useEffect(() => {
    const tmpSearch = thailandZipCode.filter(
      (r) =>
        r.province.includes(searchbar) ||
        r.district.includes(searchbar) ||
        r.subdistrict.includes(searchbar) ||
        String(r.zipcode).includes(searchbar)
    );
    setSearchZipCode(tmpSearch);
    console.log("tmp", tmpSearch);
  }, [searchbar]);

  return (
    <div>
      <div className="w-full mt-5 pl-14">
        <ZipCodeNavBar province={province} setProvince={setProvince} />
      </div>
      <div className="w-full text-center">
        {province === undefined && (
          <ZipCodeHome
            provinces={provinces}
            setProvince={setProvince}
            searchbar={searchbar}
            setSearchbar={setSearchbar}
            searchZipCode={searchZipCode}
            setSearchZipCode={setSearchZipCode}
          />
        )}
      </div>
      <div>
        {province !== undefined && (
          <ZipCodeProvince province={province} districts={districts} />
        )}
      </div>
    </div>
  );
};

export default ZipCode8;
