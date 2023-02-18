import React, { useState, useEffect } from "react";
import axios from "axios";

export const usePrizes = ({page}) => {
  const [prizes, setPrizes] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState("");

  useEffect(() => {
    const queryDate = page === 0 ? new Date().toISOString().split("T")[0] : page
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
  }, [page]);
  return { prizes, lotteryDateTitle };
};
