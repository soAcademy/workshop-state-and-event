import { useState, useEffect } from "react";
import axios from "axios";

export const useGetData = () => {
  const [allDatasApi, setAllDatasApi] = useState({});
  const [datasLottery, setDatasLottery] = useState([]);
  const [inputNumber, setInputNumber] = useState("");

  useEffect(() => {
    const _dateNow = new Date();
    const dateNowFormat = `${_dateNow.toLocaleString("default", {
      year: "numeric",
    })}-${_dateNow.toLocaleString("default", {
      month: "2-digit",
    })}-${_dateNow.toLocaleString("default", {
      day: "2-digit",
    })}`;
    // const dateNow = "2023-02-15";
    // console.log(dateNowFormat);
    const config = {
      method: "get",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${dateNowFormat}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAllDatasApi(response.data);
        // console.log(response.data.data.lotteryDateTitle);
        const obToArr = Object.keys(response.data.data.prizes).map((r) => ({
          prize: r,
          value: response.data.data.prizes[r].data,
          thaiBaht: response.data.data.prizes[r].info[1],
        }));
        // console.log(obToArr);
        setDatasLottery(obToArr);
      })
      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  }, []);

  return {
    allDatasApi,
    setAllDatasApi,
    datasLottery,
    setDatasLottery,
    inputNumber,
    setInputNumber,
  };
};
