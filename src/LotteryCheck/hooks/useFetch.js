import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = ({ dateCheck }) => {
  console.log("today", dateCheck);
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryTitle, setLotteryTitle] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${dateCheck}`,
    }).then((response) => {
      // console.log(response.data);
      setLotteryTitle(response.data?.data?.lotteryDateTitle);
      console.log("DateLotto:", response.data?.data?.lotteryDateTitle);
      const lotteryReward = Object.values(response.data?.data?.prizes);
      console.log("Reward", lotteryReward);
      const tmpLotteryData = lotteryReward?.map((r) => ({
        lottoNumbers: r.data,
        prizes: r.info[1],
      }));
      setLotteryData(tmpLotteryData);
      console.log("lotto data", tmpLotteryData);
    });
  }, [dateCheck]);
  return {
    lotteryData: lotteryData,
    lotteryTitle: lotteryTitle,
  };
};
