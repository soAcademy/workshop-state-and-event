import { useState, useEffect } from "react";
import axios from "axios";
import LottoTable from "./LottoTable";
import LottoResult from "./LottoResult";
import LottoForm from "./LottoForm";
import Dates from "./date.json";
require("dayjs/locale/th");
const dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
dayjs.locale("th");
dayjs.extend(utc);

const Lottery1 = () => {
  const [lotteryDate, setLotteryDate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(lotteryDate[0]?.dateString);
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryNumbers, setLotteryNumbers] = useState("");
  const [lotteryResult, setLotteryResult] = useState([
    // {
    //   no: "123456",
    //   result: "ถูกรางวัลที่1",
    //   prize: 6_000_000,
    // },
  ]);

  console.log("งวดที่เลือก คือ ", selectedDate);

  useEffect(() => {
    axios({
      method: "POST",
      url: `http://localhost:3100/lotteryDates`,
    }).then((response) => {
      console.log("response Date : ", response);

      const _lotteryDate = response.data?.map((r) => {
        const dateString = dayjs(r.date).utc().local().format("YYYY-MM-DD");
        const dateText = dayjs(r.date)
          .locale("th")
          .utc()
          .local()
          .format("DD MMMM YYYY");
        return { ...r, dateString, dateText };
      });
      setLotteryDate(_lotteryDate);
      console.log("lotteryDate : ", _lotteryDate);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${selectedDate}`,
    }).then((response) => {
      // console.log("response : ", response);

      const _lotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );
      setLotteryData(_lotteryData);
      // console.log("lotteryData : ", lotteryData);
    });
  }, [selectedDate]);

  const getPrizeText = (index) =>
    index < 5
      ? `รางวัลที่ ${index + 1}`
      : index === 5
      ? "รางวัลเลขท้าย 3 ตัว"
      : index === 6
      ? "รางวัลเลขท้าย 2 ตัว"
      : index === 7
      ? "รางวัลเลขหน้า 3 ตัว"
      : "รางวัลข้างเคียงรางวัลที่ 1";

  const calPrize = (number) => {
    let resultText = "";
    let prize = 0;

    number = number.trim();

    // validate 6 digit
    if (number.length === 6) {
      //check win 1 prize
      if (lotteryData[0].numbers.includes(number)) {
        resultText += "ถูกรางวัลที่ 1 ";
        prize += lotteryData[0].prize;
      }

      //check win near 1 prize
      if (lotteryData[8].numbers.includes(number)) {
        resultText += "ถูกรางวัลข้างเคียงรางวัลที่ 1 ";
        prize += lotteryData[8].prize;
      }

      //check win 2 prize
      if (lotteryData[1].numbers.includes(number)) {
        resultText += "ถูกรางวัลที่ 2 ";
        prize += lotteryData[1].prize;
      }

      //check win 3 prize
      if (lotteryData[2].numbers.includes(number)) {
        resultText += "ถูกรางวัลที่ 3 ";
        prize += lotteryData[2].prize;
      }

      //check win 4 prize
      if (lotteryData[3].numbers.includes(number)) {
        resultText += "ถูกรางวัลที่ 4 ";
        prize += lotteryData[3].prize;
      }

      //check win 5 prize
      if (lotteryData[4].numbers.includes(number)) {
        resultText += "ถูกรางวัลที่ 5 ";
        prize += lotteryData[4].prize;
      }

      //check win first 3 digits
      if (lotteryData[7].numbers.includes(number.substr(0, 3))) {
        resultText += "ถูกรางวัลเลขหน้า 3 ตัว ";
        prize += lotteryData[7].prize;
      }

      //check win last 3 digits
      if (lotteryData[5].numbers.includes(number.substr(-3))) {
        resultText += "ถูกรางวัลเลขท้าย 3 ตัว ";
        prize += lotteryData[5].prize;
      }

      //check win last 2 digits
      if (lotteryData[6].numbers.includes(number.substr(-2))) {
        resultText += "ถูกรางวัลเลขท้าย 2 ตัว ";
        prize += lotteryData[6].prize;
      }

      if (prize === 0) {
        resultText = "คุณไม่ถูกรางวัล";
      }
    } else {
      resultText = "ตัวเลขไม่ถูกต้อง ";
      prize = 0;
    }

    return {
      resultText,
      prize,
    };
  };

  const checkWinner = () => {
    // แยก numbers ไปใส่ใน lotteryResult
    const _lotteryNumbers = [...new Set(lotteryNumbers?.split("\n"))];

    // ทำตาม flowchart
    const _lotteryResult = _lotteryNumbers.map((number) => {
      let _result = calPrize(number);
      return {
        number,
        result: _result.resultText,
        prize: _result.prize,
      };
    });

    setLotteryResult(_lotteryResult);
  };

  return (
    <div className="">
      <LottoForm
        lotteryNumbers={lotteryNumbers}
        checkWinner={checkWinner}
        setLotteryNumbers={setLotteryNumbers}
        setLotteryResult={setLotteryResult}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        Dates={Dates}
        lotteryDate={lotteryDate}
      ></LottoForm>
      <LottoResult lotteryResult={lotteryResult}></LottoResult>
      <LottoTable lotteryData={lotteryData} selectedDate={selectedDate} />
    </div>
  );
};

export default Lottery1;
