const Retirement1 = () => {
  return (
    <>
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        แผนการเกษียณของฉัน
      </h1>
      <form
        action=""
        className="mb-2 grid rounded bg-slate-200 p-6 md:grid-cols-2 md:gap-6"
      >
        <div className="mb-6">
          <label
            htmlFor="currentAge"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            คุณอายุเท่าไร
          </label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="currentAge"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lifeSpan"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            มีอายุถึงกี่ปี
          </label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="lifeSpan"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="retirementAge"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            เกษียณตอนอายุ
          </label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="retirementAge"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="monthlySpending"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            ค่าใช้จ่ายต่อเดือน
          </label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="monthlySpending"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="inflationRate"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            อัตราเงินเฟ้อ
          </label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="inflationRate"
          />
        </div>
        {/* <button>คำนวณ</button> */}
      </form>
      <p className="text-center">คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน</p>
      <p className="text-center text-2xl text-red-600">40,000,000 บาท</p>
    </>
  );
};

export default Retirement1;