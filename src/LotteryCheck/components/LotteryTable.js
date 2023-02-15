export const LotteryTable = ({ lotteryData, lotteryTitle }) => {
  return (
    <div>
      <div className="text-center mt-5">
        <p>ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryTitle}</p>
      </div>
      <div className="p-10 text-center">
        <table className="w-full">
          <tbody>
            <tr className="border">
              <th className="border bg-emerald-400" colSpan="4">
                รางวัลที่ 1
              </th>
              <th className="border bg-emerald-400" colSpan="2">
                เลขหน้า 3 ตัว
              </th>
              <th className="border bg-emerald-400" colSpan="2">
                เลขท้าย 3 ตัว
              </th>
              <th className="border bg-emerald-400" colSpan="2">
                เลขท้าย 2 ตัว
              </th>
            </tr>
            <tr className="border-l">
              <td className="border" colSpan="4">
                <p>
                  รางวัลละ {lotteryData[0]?.prizes?.toLocaleString("TH-th")} บาท
                </p>
                <p>{lotteryData[0]?.lottoNumbers[0]}</p>
              </td>
              <td className="border" colSpan="2">
                <p>
                  รางวัลละ {lotteryData[7]?.prizes?.toLocaleString("TH-th")} บาท
                </p>
                <div className="flex justify-between">
                  <p className="w-6/12 text-center">
                    {lotteryData[7]?.lottoNumbers[0]}
                  </p>
                  <p className="w-6/12 text-center">
                    {lotteryData[7]?.lottoNumbers[1]}
                  </p>
                </div>
              </td>
              <td className="border" colSpan="2">
                <p>
                  รางวัลละ {lotteryData[5]?.prizes?.toLocaleString("TH-th")} บาท
                </p>
                <div className="flex justify-between">
                  <p className="w-6/12 text-center">
                    {lotteryData[5]?.lottoNumbers[0]}
                  </p>
                  <p className="w-6/12 text-center">
                    {lotteryData[5]?.lottoNumbers[1]}
                  </p>
                </div>
              </td>
              <td className="border" colSpan="2">
                <p>
                  รางวัลละ {lotteryData[6]?.prizes?.toLocaleString("TH-th")} บาท
                </p>
                <p>{lotteryData[6]?.lottoNumbers[0]}</p>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="4">
                <div className="flex justify-between">
                  <p className="w-6/12 font-semibold bg-emerald-400">ข้างเคียงรางวัลที่ 1</p>
                  <p className="w-6/12">
                    รางวัลละ {lotteryData[8]?.prizes?.toLocaleString("TH-th")}{" "}
                    บาท
                  </p>
                </div>
              </td>
              <td className="border" colSpan="6">
                <div className="flex justify-between">
                  <p className="w-4/12 font-semibold bg-emerald-400">รางวัลที่ 2</p>
                  <p className="w-8/12 text-center">
                    รางวัลละ {lotteryData[1]?.prizes?.toLocaleString("TH-th")}{" "}
                    บาท
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="4">
                <div className="flex justify-between">
                  <p className="w-6/12">{lotteryData[8]?.lottoNumbers[0]}</p>
                  <p className="w-6/12">{lotteryData[8]?.lottoNumbers[1]}</p>
                </div>
              </td>
              <td className="border" colSpan="6">
                <div className="flex justify-between px-1">
                  {lotteryData[1]?.lottoNumbers?.map((r, idx) => (
                    <div key={idx}>{r}</div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12 font-semibold bg-emerald-400">รางวัลที่ 3</p>
                  <p className="w-8/12">
                    รางวัลละ {lotteryData[2]?.prizes?.toLocaleString("TH-th")}{" "}
                    บาท
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex justify-between px-1">
                  {lotteryData[2]?.lottoNumbers?.map((r, idx) => (
                    <div key={idx}>{r}</div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12 font-semibold bg-emerald-400">รางวัลที่ 4</p>
                  <p className="w-8/12">
                    รางวัลละ {lotteryData[3]?.prizes?.toLocaleString("TH-th")}{" "}
                    บาท
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="grid grid-cols-10">
                  {lotteryData[3]?.lottoNumbers?.map((r, idx) => (
                    <div key={idx}>{r}</div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="flex">
                  <p className="w-4/12 font-semibold bg-emerald-400">รางวัลที่ 5</p>
                  <p className="w-8/12">
                    รางวัลละ {lotteryData[4]?.prizes?.toLocaleString("TH-th")}{" "}
                    บาท
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border" colSpan="10">
                <div className="grid grid-cols-10">
                  {lotteryData[4]?.lottoNumbers?.map((r, idx) => (
                    <div key={idx}>{r}</div>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
