import React, { useState, useEffect } from "react";
import axios from "axios";

export const usePrizes = () => {
  const [prizes, setPrizes] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState("");

  useEffect(() => {
    const queryDate = new Date().toISOString().split("T")[0];
    const config = {
      method: "get",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${queryDate}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const _prizes = Object.values(response.data.data.prizes);
        setPrizes(_prizes);
        setLotteryDateTitle(response.data.data.lotteryDateTitle);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return { prizes, lotteryDateTitle };
};
