import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

//Create hook


export  const useFetchExchangeRate = ({authToken})=>{
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates); //ดึงค่า values ของทุก key โดยไม่สนว่า key จะมีชื่อต่างกัน
      // console.log(_currencyLists);
      console.log("_exchangeRates", _exchangeRates);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
      console.log("exchangeRates", exchangeRates);
    });
  }, []);
  return{
    exchangeRates,currencyLists
  };
};