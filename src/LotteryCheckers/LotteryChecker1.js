const LotteryChecker1 = () => {
  
const LotteryForm = () => {
  return (
    <div className="bg-sky-300 m-auto w-1/2 mt-4">
        <h1 className="ml-4">กรอกเลข</h1>
        <div className="text-center">
          <textarea type="text" className="w-3/4 h-3/4 m-auto " />
        </div>
        <div className="flex">
          <button className="button bg-yellow-300 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4">
            ตรวจหวย
          </button>
          <button className="button bg-neutral-200 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4">
            Clear
          </button>
        </div>
      </div>
  )
}

const LotteryResults = () => {
  return (
    <div className="bg-red-300 m-auto w-1/2  mt-4">
    <div className="flex">
      <h2 className="p-2">132220</h2>
      <h2 className="p-2">ถูกกินครับ</h2>
    </div>
    <div className="flex">
      <h2 className="p-2">132220</h2>
      <h2 className="p-2">ถูกกินครับ</h2>
    </div>
    <div className="flex">
      <h2 className="p-2">132220</h2>
      <h2 className="p-2">ถูกกินครับ</h2>
    </div>
    <div className="p-2">คุณถูกหวยงวดนี้ทั้งสิ้น 180,000 บาท</div>
  </div>
  )

}

const LotteryTable = () => {
  return (
    <>
      <table className="bg-neutral-200 m-auto">
        <thead className="bg-sky-300 rounded-lg">
          <tr>
            <th className="border border-2 border-black p-2">รางวัลที่หนึ่ง</th>
            <th className="border border-2 border-black p-2">เลขหน้า 3 ตัว</th>
            <th className="border border-2 border-black p-2">เลขหลัง 3 ตัว</th>
            <th className="border border-2 border-black p-2">เลขท้าย 2 ตัว</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ 6000000 บาท</h2>
              <h1 className="text-center">253654</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ 4000 บาท</h2>
              <h1 className="text-center">253 654</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ 4000 บาท</h2>
              <h1 className="text-center">253 654</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ 2000 บาท</h2>
              <h1 className="text-center">25</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead className="">
          <tr>
            <th className="border border-2 border-black p-2 bg-sky-300">
              รางวัลข้างเคียงรางวัลที่หนึ่ง
            </th>
            <th className="border border-2 border-black p-2">
              รางวัลละ 100000 บาท
            </th>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="4"
            >
              รางวัลที่ 2
            </th>
            <th className="border border-2 border-black p-2" colSpan="6">
              รางวัลละ 200000 บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-2 border-black p-2 text-center font-bold">
              253654
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              256448
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              1
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              256524
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              2
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              256253
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              3
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              224558
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              4
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              254347
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              5
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
              275337
            </td>
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead>
          <tr>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="7"
            >
              รางวัลที่ 3
            </th>
            <th className="border border-2 border-black p-2" colSpan="13">
              รางวัลละ 80000 บาท
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            {[
              "229558",
              "512556",
              "528556",
              "555662",
              "555894",
              "556514",
              "256651",
              "255625",
              "554525",
              "665544",
            ].map((r, idx) => (
              <>
                <th className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                  {idx + 1}
                </th>
                <th className="border border-2 border-black p-2 text-center font-bold">
                  {r}
                </th>
              </>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead>
          <tr>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="7"
            >
              รางวัลที่ 4
            </th>
            <th className="border border-2 border-black p-2" colSpan="13">
              รางวัลละ 40000 บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {[
              "229558",
              "512556",
              "528556",
              "555662",
              "555894",
              "556514",
              "256651",
              "255625",
              "554525",
              "665544",
            ].map((r, idx) => (
              <>
                <th className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                  {idx + 1}
                </th>
                <th className="border border-2 border-black p-2 text-center font-bold">
                  {r}
                </th>
              </>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}
  
  return (
    <div>
      <h1 className="text-center p-2 font-bold text-2xl">Lottery Checker</h1>
        <LotteryForm />
        <LotteryResults />
      <div className="text-center">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ 1 กุมภาพันธ์ 2566
      </div>
        <LotteryTable />
    </div>
  );
};

export default LotteryChecker1;
