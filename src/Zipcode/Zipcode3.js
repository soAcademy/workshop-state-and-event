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

const Zipcode3 = () => {
  return (
    <ZipcodeHome
      provinces={[...new Set(zipcodeList.map((item) => item.province))].sort(
        (a, b) => a.localeCompare(b, "th", { ignorePunctuation: true })
      )}
    />
  );
};

export default Zipcode3;
