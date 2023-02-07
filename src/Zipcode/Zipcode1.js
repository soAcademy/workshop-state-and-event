import zipcodeList from "./thailand-zipcode.json";

const Zipcode1 = () => {
  return (
    <>
      <h1 className="font-2xl mb-2 text-center font-bold">ค้นหารหัสไปรษณีย์</h1>
      <input
        type="text"
        className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-nstl text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <h2 className="font-xl mb-2 font-bold">เลือกจังหวัด</h2>
      <ul className="grid grid-cols-4 gap-2">
        {[...new Set(zipcodeList.map((item) => item.province))]
          .sort()
          .map((province) => (
            <li className="font-nstl">
              <button className="text-blue-600">{province}</button>
            </li>
          ))}
      </ul>
      {/* <p>{JSON.stringify(zipcodeList)}</p> */}
    </>
  );
};

export default Zipcode1;
