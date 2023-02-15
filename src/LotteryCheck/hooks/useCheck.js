import { useState, useEffect } from "react";

export const useCheck = ({ lotteryData }) => {
  const [lotteryNumbers, setLotteryNumbers] = useState();
  const [lottoResult, setLottoResult] = useState();
  const [toggle, setToggle] = useState(false);

  const lottoCheck = (number) =>
    lotteryData?.findIndex(
      (r, idx) =>
        idx === 5
          ? r.lottoNumbers.includes(number.substr(-3)) // 3 ตัวหลัง
          : idx === 6
          ? r.lottoNumbers.includes(number.substr(-2)) // 2 ตัวหลัง
          : idx === 7
          ? r.lottoNumbers.includes(number.substr(0, 3)) // 3 ตัวหน้า
          : r.lottoNumbers.includes(number) // เช็คทั้ง 6 ตัว
    );

  const showLottoResults = (index) =>
    index < 5
      ? `รางวัลที่ ${index + 1}`
      : index === 5
      ? "รางวัลเลขท้าย 3 ตัว"
      : index === 6
      ? "รางวัลเลขท้าย 2 ตัว"
      : index === 7
      ? "รางวัลเลขหน้า 3 ตัว"
      : "รางวัลข้างเคียงรางวัลที่ 1";

  useEffect(() => {
    const tmpLotteryNumbers = [
      ...new Set(lotteryNumbers?.split("\n").filter((i) => i.length === 6)),
    ];

    const tmpLottoResult = tmpLotteryNumbers.map((number) => ({
      number: number,
      prize: lottoCheck(number),
    }));

    const resultTexts = tmpLottoResult.map(
      (r) =>
        "หมายเลข " +
        r.number +
        " " +
        (r.prize === -1 ? "ถูกกินครับ" : `ถูก${showLottoResults(r.prize)}`)
    );
    console.log("ShowLotto", resultTexts);

    const totalPrize = tmpLottoResult
      .filter((r) => r.prize !== -1)
      .reduce((acc, r) => acc + lotteryData[r.prize].prizes, 0);
    console.log("totalPrize", totalPrize);

    setLottoResult({ resultTexts, totalPrize });
  }, [toggle]);
  return {
    lotteryNumbers,
    setLotteryNumbers,
    toggle,
    setToggle,
    lottoResult,
    setLottoResult,
  };
};
