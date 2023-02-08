import { useState, useEffect } from "react";
import ThailandZipcodeData from "./thailand-zipcode.json";

const ZipcodeHome = ({
  provinces,
  setProvince,
  search,
  setSearch,
  searchDatas,
  setSearchDatas,
}) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    {search?.length >= 3 && (
      <div className="w-1/3 mx-auto mt-4 relative">
        <div className="w-full h-64 overflow-auto bg-white shadow text-left rounded-lg absolute">
          <div className="font-bold px-4 pt-4">
            ผลลัพธ์การค้นหา {searchDatas.length} รายการ
          </div>
          <div className="text-sm text-gray-600">
            {searchDatas?.map((r, idx) => (
              <div
                key={idx}
                className="py-1 hover:cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `ต.${r.subdistrict} อ.${r.district} จ.${r.province} ${r.zipcode}`
                  )
                }
              >
                <span className="px-4">
                  ต.{r.subdistrict} อ.{r.district} จ.{r.province} {r.zipcode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">เลือกจังหวัด</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div
            onClick={() => setProvince(province)}
            className="cursor-pointer text-blue-500"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </>
);

const ZipcodeProvince = ({ province, districts }) => (
  <>
    <h1 className="text-2xl pt-3 font-bold">
      รหัสไปรษณีย์ในจังหวัด {province}
    </h1>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <table className="w-full">
        <thead>
          <tr className="text-center font-bold border-collapse">
            <th className="border border-slate-300 p-2">#</th>
            <th className="border border-slate-300 p-2">อำเภอ/เขต</th>
            <th className="border border-slate-300 p-2">รหัสไปรษณีย์</th>
          </tr>
        </thead>
        <tbody>
          {districts.map((r, idx) => (
            <tr key={idx}>
              <td className="border border-slate-300 text-center p-2">
                {idx + 1}
              </td>
              <td className="border border-slate-300 p-2">{r.district}</td>
              <td className="border border-slate-300 text-center p-2">
                {r.zipcode}{" "}
                <span
                  className="text-blue-500 cursor-pointer active:text-blue-300"
                  onClick={() => navigator.clipboard.writeText(r.zipcode)}
                >
                  คัดลอก
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const ZipcodeNavBar = ({ province, setProvince }) => (
  <div>
    <span
      className="text-blue-500 cursor-pointer"
      onClick={() => setProvince(undefined)}
    >
      หน้าแรก
    </span>
    {province !== undefined && (
      <span className="text-gray-500"> / {province}</span>
    )}
  </div>
);

const Zipcode8 = () => {
  const provinces = [...new Set(ThailandZipcodeData.map((r) => r.province))];
  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);
  const [search, setSearch] = useState();
  const [searchDatas, setSearchDatas] = useState([]);

  // Event based driven
  // 1 -> 2 -> 3 -> 4
  // onClick = () => {setProvince()}
  // useEffect(() => {updateDistrict()}, [province, filter])
  // useEffect(() => {calculateData()}, [province, searchTerm])

  useEffect(() => {
    const _districts = [
      ...new Map(
        ThailandZipcodeData.filter((r) => r.province === province).map((r) => [
          r.district,
          r,
        ])
      ).values(),
    ];
    setDistricts(_districts);
  }, [province]);

  useEffect(() => {
    const _searchDatas =
      search?.length >= 3
        ? ThailandZipcodeData.filter(
            (r) =>
              r.province.includes(search) ||
              r.district.includes(search) ||
              r.subdistrict.includes(search) ||
              String(r.zipcode).includes(search)
          )
        : [];
    setSearchDatas(_searchDatas);
    console.log(_searchDatas);
  }, [search]);

  return (
    <div className="w-full text-center">
      <div className="mt-4">
        <ZipcodeNavBar province={province} setProvince={setProvince} />
      </div>
      {province === undefined && (
        <ZipcodeHome
          provinces={provinces}
          setProvince={setProvince}
          search={search}
          setSearch={setSearch}
          searchDatas={searchDatas}
          setSearchDatas={setSearchDatas}
        />
      )}
      {province !== undefined && (
        <ZipcodeProvince province={province} districts={districts} />
      )}
    </div>
  );
};

export default Zipcode8;

// const carts = [
//   {
//     id: 100,
//     quantity: 1
//   }
// ]

// const product = {
//   id: 101,
//   quantity: 2
// }

// const carts = [
//   {
//     id: 100,
//     quantity: 1
//   },
//   {
//     id: 101,
//     quantity: 2
//   }
// ]

// const product = {
//   id: 101,
//   quantity: 2
// }

// const carts = [
//   {
//     id: 100,
//     quantity: 1
//   },
//   {
//     id: 101,
//     quantity: 4
//   }
// ]

// if ถ้ามีอยู่แล้ว then ให้เพิ่ม quantity
// else ถ้ายังไม่มีให้สร้างใหม่

// const idx = carts.findIndex((r) => r.id === product.id);

// ถ้ามันมี idx >= 0 (เป็นค่า index)
// ถ้าไม่มี idx === -1

// แล้วเราจะเอา product join กับ cart ได้ไง

// const tempCarts = [...carts];
// const idx = carts.findIndex((r) => r.id === product.id);

// if (idx >=0) {
//   tempCarts[idx].quantity += product.quantity;
// } else {
//   tempCarts.push(product);
//   // setCarts([...tempCarts, ...product])
//   setCarts([...tempCarts, {id: product.id, quantity: product.quantity}])
// }
// setCarts(tempCarts);